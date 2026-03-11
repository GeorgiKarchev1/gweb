import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Моля попълни всички задължителни полета." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Gweb Website" <${process.env.SMTP_USER}>`,
    to: "help@gweb.bg",
    replyTo: email,
    subject: `Ново запитване от ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="margin: 0 0 24px; color: #1a1a1a;">Ново запитване от сайта</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 100px;">Име</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Имейл</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Телефон</td>
            <td style="padding: 10px 0; color: #111827; font-weight: 600;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Съобщение</td>
            <td style="padding: 10px 0; color: #111827;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="margin: 24px 0 0; font-size: 12px; color: #9ca3af;">Изпратено от gweb.bg</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
