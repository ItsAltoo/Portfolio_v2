// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Tipe data untuk respon API supaya rapi
type ResponseData = {
  message: string;
  success: boolean;
};

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }

  const { name, email, message } = req.body as ContactBody;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Semua field harus diisi", success: false });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Pesan Baru dari ${name} (Portfolio)`,
      text: message,
      html: `
        <h3>Pesan Baru dari Website Portfolio</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
          ${message}
        </div>
      `,
    });

    return res
      .status(200)
      .json({ message: "Email berhasil dikirim!", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Gagal mengirim email", success: false });
  }
}
