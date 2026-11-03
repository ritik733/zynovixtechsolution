import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";
import {
  contactRateLimiter,
  getClientIp,
} from "@/lib/rateLimit";
import {
  escapeHtml,
  sanitizeEmail,
  sanitizeText,
  isHoneypotTriggered,
  validateTrustedOrigin,
  isPayloadSizeValid,
} from "@/lib/security";

const RECIPIENTS = [
  "zynovixtechsolutions@gmail.com",
  "praveens9699@gmail.com",
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  // 1. CSRF Origin Validation
  if (!validateTrustedOrigin(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized request origin." },
      { status: 403 }
    );
  }

  // 2. Request Payload Size Guard (max 64KB for contact JSON)
  if (!isPayloadSizeValid(request, 64 * 1024)) {
    return NextResponse.json(
      { success: false, error: "Payload exceeds size limit." },
      { status: 413 }
    );
  }

  // 3. Sliding-window Rate Limiting by Client IP
  const clientIp = getClientIp(request);
  const rateLimitStatus = contactRateLimiter.check(clientIp);

  if (!rateLimitStatus.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many inquiries sent from this IP. Please wait a few minutes before trying again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, rateLimitStatus.reset - Math.floor(Date.now() / 1000))),
          "X-RateLimit-Limit": String(rateLimitStatus.limit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimitStatus.reset),
        },
      }
    );
  }

  try {
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Malformed request payload." },
        { status: 400 }
      );
    }

    // 4. Anti-Bot Honeypot Check
    if (isHoneypotTriggered(body)) {
      // Silently discard automated bot submission while returning 200 OK
      return NextResponse.json({
        success: true,
        message: "Your message was submitted successfully.",
      });
    }

    // 5. Input Sanitization & Validation
    const name = sanitizeText(body.name, 100);
    const email = sanitizeEmail(body.email);
    const phone = sanitizeText(body.phone, 35, "Not provided");
    const serviceName = sanitizeText(body.serviceName, 100);
    const company = sanitizeText(body.company, 120);
    const project = sanitizeText(body.project, 5000);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 6. Format Details Safely
    let formattedDetails = "";
    if (serviceName) formattedDetails += `Service: ${serviceName}\n`;
    if (company) formattedDetails += `Company: ${company}\n`;

    // Process any custom fields with strict bounds
    const disallowedKeys = new Set([
      "name",
      "email",
      "phone",
      "project",
      "serviceName",
      "company",
      "website",
      "b_name",
      "honeypot",
      "fax",
      "__proto__",
      "constructor",
      "prototype",
    ]);

    let customFieldCount = 0;
    for (const [key, val] of Object.entries(body)) {
      if (customFieldCount >= 15) break; // Limit custom fields to prevent CPU/memory abuse
      if (disallowedKeys.has(key) || typeof key !== "string") continue;

      if (val !== undefined && val !== null && val !== "") {
        const safeKey = sanitizeText(key, 50)
          .replace(/([A-Z])/g, " $1")
          .replace(/_/g, " ")
          .replace(/^./, (str) => str.toUpperCase());

        let safeVal = "";
        if (Array.isArray(val)) {
          safeVal = val
            .slice(0, 10)
            .map((v) => sanitizeText(v, 80))
            .join(", ");
        } else {
          safeVal = sanitizeText(val, 250);
        }

        if (safeVal) {
          formattedDetails += `${safeKey}: ${safeVal}\n`;
          customFieldCount++;
        }
      }
    }

    if (project) {
      formattedDetails += `\nProject / Notes:\n${project}`;
    }

    if (!formattedDetails.trim()) {
      formattedDetails = "Service Inquiry from landing page";
    }

    // 7. Save Lead to Supabase Database
    try {
      const { error: supabaseError } = await supabase
        .from("contact_leads")
        .insert({
          full_name: name,
          email: email,
          phone: phone,
          project_details: formattedDetails.trim(),
        });

      if (supabaseError) {
        console.error("Supabase contact_leads error:", supabaseError);
        // Note: Continue to attempt email delivery even if DB has a temporary glitch
      }
    } catch (dbErr) {
      console.error("Supabase insert exception:", dbErr);
    }

    // 8. Send Email through Gmail (Nodemailer)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const subjectPrefix = serviceName ? `[${serviceName}]` : "New Contact Form Lead";
        await transporter.sendMail({
          from: `"Zynovix Website" <${process.env.GMAIL_USER}>`,
          to: RECIPIENTS.join(", "),
          replyTo: email,
          subject: `${subjectPrefix} Inquiry — ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb;">${escapeHtml(serviceName ? `${serviceName} Inquiry` : "New Contact Form Lead")}</h2>
              <p>A new inquiry has been submitted through the <strong>Zynovix Tech Solutions</strong> website.</p>
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
              <h3>Contact Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
                ${company ? `<tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ""}
              </table>

              <h3 style="margin-top: 25px;">Requirements & Details</h3>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap; font-family: monospace, sans-serif; font-size: 14px; line-height: 1.6;">
                ${escapeHtml(formattedDetails.trim())}
              </div>
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 25px 0;" />
              <p style="color: #64748b; font-size: 13px;">Security verified submission. Origin IP: ${escapeHtml(clientIp)}</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Nodemailer delivery error:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message was received successfully.",
    });
  } catch (err) {
    console.error("Contact API unhandled error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
