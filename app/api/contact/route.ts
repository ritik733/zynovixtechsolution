import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, project } = body;

    if (!name || !email || !phone || !project) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("contact_leads")
      .insert({
        full_name: String(name),
        email: String(email),
        phone: String(phone),
        project_details: String(project),
      });

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to save your message",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}