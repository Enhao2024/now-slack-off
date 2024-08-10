// /app/api/sendMail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

interface RequestBody {
  name: string;
  userEmail: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, userEmail, message }: RequestBody = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'email-smtp.ap-southeast-2.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SES_USER,
        pass: process.env.SES_PASS,
      },
    });

    const emailBody = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1>User message from ${name} </h1>
        <p> ${message} </p>
      </div>
    `;

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `User message from ${name}`,
      html: emailBody,
      replyTo: userEmail,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed Email' }, { status: 500 });
  }
}
