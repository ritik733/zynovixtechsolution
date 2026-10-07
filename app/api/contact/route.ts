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
    const { name, email, phone, project } = body;

    if (!name || !email || !phone || !project) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
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
        phone: String(phone),
        project_details: String(project),
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
      const info = await transporter.sendMail({
        from: `"Zynovix Website" <${process.env.GMAIL_USER}>`,
        to: RECIPIENTS.join(", "),
        subject: `New Contact Form Lead — ${String(name)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">New Contact Form Lead</h2>
            <p>A new inquiry has been submitted through the <strong>Zynovix Tech Solution</strong> website.</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <h3>Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Full Name</td><td style="padding: 8px 0;">${escapeHtml(String(name))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(String(email))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(String(phone))}</td></tr>
            </table>
            <h3 style="margin-top: 25px;">Project Details</h3>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap;">
              ${escapeHtml(String(project))}
            </div>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 25px 0;" />
            <p style="color: #64748b; font-size: 13px;">This email was automatically generated from the Zynovix Tech Solution contact form.</p>
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