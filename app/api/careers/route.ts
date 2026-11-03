import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";
import {
  careersRateLimiter,
  getClientIp,
} from "@/lib/rateLimit";
import {
  escapeHtml,
  sanitizeEmail,
  sanitizeText,
  validateTrustedOrigin,
  isPayloadSizeValid,
} from "@/lib/security";

const RECIPIENTS = [
  "patwaritik08@gmail.com",
  "praveens9699@gmail.com",
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  // 1. CSRF Origin Validation
  if (!validateTrustedOrigin(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized request origin." },
      { status: 403 }
    );
  }

  // 2. Request Payload Size Guard (max 6MB for multipart career form)
  if (!isPayloadSizeValid(req, 6 * 1024 * 1024)) {
    return NextResponse.json(
      { success: false, error: "Application payload exceeds size limit (5MB max)." },
      { status: 413 }
    );
  }

  // 3. Sliding-window Rate Limiting by Client IP
  const clientIp = getClientIp(req);
  const rateLimitStatus = careersRateLimiter.check(clientIp);

  if (!rateLimitStatus.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many applications submitted from this IP. Please wait a while before submitting again.",
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
    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid form data submission." },
        { status: 400 }
      );
    }

    // 4. Anti-Bot Honeypot Check
    const honeypotVal = formData.get("website") || formData.get("b_name") || formData.get("fax");
    if (typeof honeypotVal === "string" && honeypotVal.trim().length > 0) {
      // Silently discard automated bot submission
      return NextResponse.json({
        success: true,
        ok: true,
        message: "Application submitted successfully.",
      });
    }

    // 5. Input Validation & Sanitization
    const rawName = formData.get("name");
    const rawEmail = formData.get("email");
    const rawPhone = formData.get("phone");
    const rawCollege = formData.get("college");
    const rawMessage = formData.get("message");
    const resume = formData.get("resume") as File | null;

    const name = sanitizeText(rawName, 100);
    const email = sanitizeEmail(rawEmail);
    const phone = sanitizeText(rawPhone, 35);
    const college = rawCollege ? sanitizeText(rawCollege, 120) : null;
    const message = sanitizeText(rawMessage, 4000);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please share why you want to join our team (at least 10 characters)." },
        { status: 400 }
      );
    }

    // 6. Resume Validation
    if (!resume || !(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { success: false, error: "Resume PDF is required." },
        { status: 400 }
      );
    }

    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { success: false, error: "Resume must be a valid PDF document." },
        { status: 400 }
      );
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Resume must be under 5MB in size." },
        { status: 400 }
      );
    }

    // Convert file to buffer safely
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize file name for filesystem/email safety
    const safeBaseName = name.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40);
    const sanitizedFileName = `${safeBaseName || "Candidate"}_Resume.pdf`;

    // 7. Optional Upload to Supabase Storage
    let resumeUrl: string | null = null;
    try {
      const storagePath = `resumes/${Date.now()}_${sanitizedFileName}`;
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from("resumes")
        .upload(storagePath, buffer, {
          contentType: "application/pdf",
          upsert: false,
        });

      if (!uploadErr && uploadData) {
        const { data: publicUrlData } = supabase.storage
          .from("resumes")
          .getPublicUrl(uploadData.path);
        resumeUrl = publicUrlData?.publicUrl || null;
      }
    } catch (storageErr) {
      console.warn("Supabase storage upload optional fallback:", storageErr);
    }

    // 8. Save Application to Supabase
    const insertPayload: Record<string, unknown> = {
      full_name: name,
      email: email,
      phone: phone,
      college: college || null,
      message: message,
      resume_name: sanitizedFileName,
    };
    if (resumeUrl) {
      insertPayload.resume_url = resumeUrl;
    }

    let { error: supabaseError } = await supabase
      .from("career_applications")
      .insert(insertPayload);

    // Schema fallback if table uses 'name' instead of 'full_name'
    if (supabaseError && supabaseError.message?.includes("full_name")) {
      const { error: nameFallbackError } = await supabase
        .from("career_applications")
        .insert({
          name: name,
          email: email,
          phone: phone,
          college: college || null,
          message: message,
        });
      if (!nameFallbackError) {
        supabaseError = null;
      }
    }

    if (supabaseError) {
      console.error("Supabase career_applications error:", supabaseError);
      // Do not disclose internal schema errors to client
    }

    // 9. Send Notification Email via Nodemailer
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        await transporter.sendMail({
          from: `"Zynovix Careers" <${process.env.GMAIL_USER}>`,
          to: RECIPIENTS.join(", "),
          replyTo: email,
          subject: `New Career Application — ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #7c3aed;">New Career Application</h2>
              <p>A new candidate has submitted an application through the <strong>Zynovix Careers</strong> portal.</p>
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
              <h3>Candidate Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Full Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">College / University</td><td style="padding: 8px 0;">${escapeHtml(college || "Not provided")}</td></tr>
              </table>
              <h3 style="margin-top: 25px;">Applicant Statement</h3>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap; font-size: 14px;">
                ${escapeHtml(message)}
              </div>
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 25px 0;" />
              <p style="color: #64748b; font-size: 13px;">📎 Resume attached (${escapeHtml(sanitizedFileName)}). Verified origin: ${escapeHtml(clientIp)}</p>
            </div>
          `,
          attachments: [
            {
              filename: sanitizedFileName,
              content: buffer,
              contentType: "application/pdf",
            },
          ],
        });
      } catch (emailError) {
        console.error("Careers email delivery error:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      ok: true,
      message: "Application submitted and received successfully.",
    });
  } catch (error) {
    console.error("Careers API unhandled error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
