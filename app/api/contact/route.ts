import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "../../../lib/supabase";

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
  try {
    const body = await request.json();
    const { name, email, phone, project, serviceName, company, ...extraFields } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    const resolvedPhone = phone || extraFields.contactDetails || "Not provided";

    // Format all submitted details into project_details
    let formattedDetails = "";
    if (serviceName) formattedDetails += `Service: ${serviceName}\n`;
    if (company) formattedDetails += `Company: ${company}\n`;

    // Process any custom fields
    const extraEntries = Object.entries(extraFields).filter(
      ([key, val]) => val !== undefined && val !== null && val !== "" && key !== "contactDetails"
    );

    for (const [key, val] of extraEntries) {
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/^./, (str) => str.toUpperCase());
      const formattedVal = Array.isArray(val) ? val.join(", ") : String(val);
      formattedDetails += `${formattedKey}: ${formattedVal}\n`;
    }

    if (project) {
      formattedDetails += `\nProject / Notes:\n${String(project)}`;
    }

    if (!formattedDetails.trim()) {
      formattedDetails = "Service Inquiry from landing page";
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials are missing");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // 1. SAVE LEAD TO SUPABASE
    const { error: supabaseError } = await supabase
      .from("contact_leads")
      .insert({
        full_name: String(name),
        email: String(email),
        phone: String(resolvedPhone),
        project_details: formattedDetails.trim(),
      });

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      return NextResponse.json(
        { success: false, error: "Failed to save your message" },
        { status: 500 }
      );
    }

    console.log("Lead saved successfully to Supabase");

    // 2. SEND EMAIL THROUGH GMAIL
    try {
      const subjectPrefix = serviceName ? `[${serviceName}]` : "New Contact Form Lead";
      const info = await transporter.sendMail({
        from: `"Zynovix Website" <${process.env.GMAIL_USER}>`,
        to: RECIPIENTS.join(", "),
        subject: `${subjectPrefix} Inquiry — ${String(name)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">${escapeHtml(serviceName ? `${serviceName} Inquiry` : "New Contact Form Lead")}</h2>
            <p>A new inquiry has been submitted through the <strong>Zynovix Tech Solutions</strong> website.</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <h3>Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name</td><td style="padding: 8px 0;">${escapeHtml(String(name))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(String(email))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(String(resolvedPhone))}</td></tr>
              ${company ? `<tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td style="padding: 8px 0;">${escapeHtml(String(company))}</td></tr>` : ""}
            </table>

            <h3 style="margin-top: 25px;">Requirements & Details</h3>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap; font-family: monospace, sans-serif; font-size: 14px; line-height: 1.6;">
              ${escapeHtml(formattedDetails.trim())}
            </div>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 25px 0;" />
            <p style="color: #64748b; font-size: 13px;">This email was automatically generated from the Zynovix Tech Solutions website.</p>
          </div>
        `,
      });

      console.log("Email sent successfully:", info.messageId);

      return NextResponse.json({
        success: true,
        message: "Your message was submitted successfully.",
        emailSent: true,
      });
    } catch (emailError) {
      console.error("Nodemailer error:", emailError);
      return NextResponse.json({
        success: true,
        message: "Your message was received successfully.",
        emailSent: false,
      });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}