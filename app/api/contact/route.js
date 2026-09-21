import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Contact from "../../../models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      success: true,
      message: "Message saved successfully."
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error. Check your database connection." },
      { status: 500 }
    );
  }
}
