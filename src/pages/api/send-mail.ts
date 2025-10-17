import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, topic, message, assignedTo } = req.body;

  if (!email || !topic || !message || !assignedTo) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // IMPORTANT: Store your credentials in environment variables
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;

  if (!mailUser || !mailPass) {
    console.error('Email credentials (MAIL_USER, MAIL_PASS) are not set in .env file.');
    return res.status(500).json({ error: 'Server is not configured for sending emails.' });
  }
  
  try {
    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your mail provider's SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Circle Support" <${mailUser}>`,
      to: assignedTo,
      replyTo: email, // Set the user's email as the reply-to address
      subject: `📩 New Support Ticket: ${topic}`,
      text: `A new support ticket has been submitted.\n\nFrom: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Support Ticket</h2>
          <p>A new support request has been assigned to you.</p>
          <hr>
          <p><b>From:</b> ${email}</p>
          <p><b>Topic:</b> ${topic}</p>
          <h3>Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
          <hr>
          <p><small>You can reply directly to this email to respond to the user.</small></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
