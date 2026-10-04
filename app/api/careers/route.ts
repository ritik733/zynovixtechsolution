import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const college = formData.get("college") as string | null;
    const message = formData.get("message") as string | null;
    const resume = formData.get("resume") as File | null;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resume || resume.size === 0) {
      return NextResponse.json(
        { error: "Resume PDF is required" },
        { status: 400 }
      );
    }

    // Validate PDF type
    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Resume must be a PDF file" },
        { status: 400 }
      );
    }

    // Validate size (5MB max)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Resume must be under 5MB" },
        { status: 400 }
      );
    }

    // Convert file to Buffer for attachment
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Send application to your team (with PDF attachment)
    await resend.emails.send({
      from: "Zynovix Careers <onboarding@resend.dev>",
      to: "praveens9784@gmail.com",
      replyTo: email,
      subject: `New Internship Application — ${name}`,
      html: `
        <h2>New Internship Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>College:</strong> ${college || "Not provided"}</p>
        <hr />
        <p><strong>Why they want to join:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          📎 Resume attached as PDF.
        </p>
      `,
      attachments: [
        {
          filename: `${name.replace(/\s+/g, "_")}_Resume.pdf`,
          content: buffer,
        },
      ],
    });

    // Auto-reply to the applicant
    await resend.emails.send({
      from: "Zynovix Tech Solution <onboarding@resend.dev>",
      to: email,
      subject: "We received your application — Zynovix",
      html: `
        <h2>Thanks for applying, ${name}!</h2>
        <p>We've received your internship application and our team will review it shortly.</p>
        <p>We'll get back to you within 2–3 business days.</p>
        <br />
        <p>Best regards,<br />Zynovix Tech Solution</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers API error:", err);
    return NextResponse.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}