import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

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
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const college = formData.get("college") as string | null;
    const message = formData.get("message") as string | null;
    const resume = formData.get("resume") as File | null;

    // 1. Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resume || resume.size === 0) {
      return NextResponse.json(
        { success: false, error: "Resume PDF is required" },
        { status: 400 }
      );
    }

    // Validate PDF type
    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { success: false, error: "Resume must be a PDF file" },
        { status: 400 }
      );
    }

    // Validate size (5MB max)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "Resume must be under 5MB" },
        { status: 400 }
      );
    }

    // Convert file to Buffer for email attachment & optional upload
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const sanitizedFileName = `${name.replace(/[^a-zA-Z0-9_-]/g, "_")}_Resume.pdf`;

    // 2. OPTIONAL: Attempt to upload resume to Supabase Storage if bucket exists
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
      console.warn("Supabase storage upload skipped or failed:", storageErr);
    }

    // 3. SAVE APPLICATION TO SUPABASE TABLE (career_applications)
    const insertPayload: Record<string, any> = {
      full_name: String(name),
      email: String(email),
      phone: String(phone),
      college: college ? String(college) : null,
      message: String(message),
      resume_name: resume.name || sanitizedFileName,
    };
    if (resumeUrl) {
      insertPayload.resume_url = resumeUrl;
    }

    let { error: supabaseError } = await supabase
      .from("career_applications")
      .insert(insertPayload);

    // Schema fallback: if columns like resume_url or resume_name don't exist yet
    if (
      supabaseError &&
      (supabaseError.message?.includes("resume_url") ||
        supabaseError.message?.includes("resume_name"))
    ) {
      const { error: fallbackError } = await supabase
        .from("career_applications")
        .insert({
          full_name: String(name),
          email: String(email),
          phone: String(phone),
          college: college ? String(college) : null,
          message: String(message),
        });
      supabaseError = fallbackError;
    }

    // Schema fallback: if table uses 'name' instead of 'full_name'
    if (supabaseError && supabaseError.message?.includes("full_name")) {
      const { error: nameFallbackError } = await supabase
        .from("career_applications")
        .insert({
          name: String(name),
          email: String(email),
          phone: String(phone),
          college: college ? String(college) : null,
          message: String(message),
        });
      if (!nameFallbackError) {
        supabaseError = null;
      }
    }

    if (supabaseError) {
      console.error("Supabase error saving career application:", supabaseError);
      return NextResponse.json(
        {
          success: false,
          error: `Failed to save application to database: ${supabaseError.message}`,
        },
        { status: 500 }
      );
    }

    console.log("Career application saved successfully to Supabase");

    // 4. SEND EMAIL THROUGH GMAIL (NODEMAILER)
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials are missing");
      return NextResponse.json(
        {
          success: true,
          ok: true,
          warning: "Application saved to database, but email service is not configured.",
        },
        { status: 200 }
      );
    }

    try {
      // Email to Praveen and Ritik
      const info = await transporter.sendMail({
        from: `"Zynovix Careers" <${process.env.GMAIL_USER}>`,
        to: RECIPIENTS.join(", "),
        replyTo: String(email),
        subject: `New Internship Application — ${escapeHtml(String(name))}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #7c3aed;">New Internship Application</h2>
            <p>A new candidate has submitted an application through the <strong>Zynovix Careers</strong> page.</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <h3>Candidate Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Full Name</td><td style="padding: 8px 0;">${escapeHtml(String(name))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${escapeHtml(String(email))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(String(phone))}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">College / University</td><td style="padding: 8px 0;">${escapeHtml(String(college || "Not provided"))}</td></tr>
            </table>
            <h3 style="margin-top: 25px;">Why they want to join</h3>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap;">
              ${escapeHtml(String(message))}
            </div>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 25px 0;" />
            <p style="color: #64748b; font-size: 13px;">📎 Resume is attached as PDF (${escapeHtml(sanitizedFileName)}).</p>
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

      console.log("Careers email sent successfully:", info.messageId);


      return NextResponse.json({
        success: true,
        ok: true,
        message: "Application submitted and email sent successfully",
      });
    } catch (emailError: any) {
      console.error("Nodemailer error:", emailError);
      return NextResponse.json({
        success: true,
        ok: true,
        warning: "Application saved to database, but notification email could not be sent.",
      });
    }
  } catch (error: any) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Something went wrong. Please try again." },
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