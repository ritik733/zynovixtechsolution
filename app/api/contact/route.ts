import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  try {
    console.log("=== CONTACT FORM START ===");

    // Check environment variable
    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is missing");

      return NextResponse.json(
        {
          success: false,
          error: "GOOGLE_SCRIPT_URL is missing from environment variables",
        },
        { status: 500 }
      );
    }

    console.log("Google Script URL exists");

    // Read request body
    const body = await request.json();

    console.log("Received form data:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      project: body.project,
    });

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.project) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Prepare data for Google Apps Script
    const formData = new URLSearchParams();

    formData.append("name", String(body.name));
    formData.append("email", String(body.email));
    formData.append("phone", String(body.phone));
    formData.append("project", String(body.project));

    console.log("Sending data to Google Apps Script...");

    // Send request to Google Apps Script
    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
      cache: "no-store",
    });

    console.log("Google response status:", googleResponse.status);
    console.log("Google response URL:", googleResponse.url);

    const googleText = await googleResponse.text();

    console.log("Google response:", googleText);

    if (!googleResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `Google Apps Script returned HTTP ${googleResponse.status}`,
          details: googleText,
        },
        { status: 502 }
      );
    }

    // Try to parse Google's response
    let googleResult;

    try {
      googleResult = JSON.parse(googleText);
    } catch {
      googleResult = null;
    }

    // If Apps Script explicitly returned success:false
    if (googleResult && googleResult.success === false) {
      return NextResponse.json(
        {
          success: false,
          error: googleResult.error || "Google Apps Script failed",
        },
        { status: 502 }
      );
    }

    console.log("=== CONTACT FORM SUCCESS ===");

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("=== CONTACT FORM ERROR ===");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown server error",
      },
      { status: 500 }
    );
  }
}