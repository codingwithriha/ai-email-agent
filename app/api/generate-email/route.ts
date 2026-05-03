import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { recipient, purpose, tone, type, length } = await req.json();

    const prompt = `
You are a professional AI email writer.

Write a clean, structured email with:

Recipient: ${recipient}
Purpose: ${purpose}
Tone: ${tone}
Type: ${type}
Length: ${length}

Rules:
- Always include a subject line
- Make it human-like and professional
- Proper formatting
`;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.7,
    });

    return NextResponse.json({
      email: response.choices[0].message.content,
    });

  } catch (error: any) {
    console.error("AI ERROR:", error);

    return NextResponse.json(
      {
        email: "Failed to generate email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}