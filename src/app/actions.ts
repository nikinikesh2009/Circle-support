'use server';

import { z } from 'zod';
import { faqData } from '@/lib/data';
import { chatWithCircleSupportAI } from '@/ai/flows/circle-support-ai';
import { translateText } from '@/ai/flows/translate-text';
import { type LocaleStrings } from '@/lib/locale';
import supporterData from '@/lib/emails.json';
import nodemailer from 'nodemailer';

const ticketSchema = z.object({
  topic: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitTicket(values: z.infer<typeof ticketSchema>) {
  try {
    const validatedData = ticketSchema.parse(values);

    // 1. Pick a random supporter
    const supporters = supporterData.supporters;
    const assignedTo = supporters[Math.floor(Math.random() * supporters.length)];

    console.log(`New ticket for: ${assignedTo}`, validatedData);

    // 2. Send email directly using nodemailer
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;

    if (!mailUser || !mailPass) {
      console.error('Email credentials (MAIL_USER, MAIL_PASS) are not set in .env file.');
      return { success: false, error: 'Server is not configured for sending emails.' };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    await transporter.sendMail({
      from: `"Circle Support" <${mailUser}>`,
      to: assignedTo,
      replyTo: validatedData.email,
      subject: `📩 New Support Ticket: ${validatedData.topic}`,
      text: `A new support ticket has been submitted.\n\nFrom: ${validatedData.email}\nTopic: ${validatedData.topic}\n\nMessage:\n${validatedData.message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Support Ticket</h2>
          <p>A new support request has been assigned to you.</p>
          <hr>
          <p><b>From:</b> ${validatedData.email}</p>
          <p><b>Topic:</b> ${validatedData.topic}</p>
          <h3>Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 8px;">
            ${validatedData.message.replace(/\n/g, '<br>')}
          </p>
          <hr>
          <p><small>You can reply directly to this email to respond to the user.</small></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Ticket submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed." };
    }
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: errorMessage };
  }
}

// AI Chatbot action
export async function askAI(userInput: string, chatHistory: {role: 'user' | 'assistant', content: string}[]): Promise<string> {
  if (!userInput) {
    return "Please enter a question.";
  }
  
  try {
    const result = await chatWithCircleSupportAI({ 
      userInput,
      chatHistory: chatHistory.map(m => `${m.role}: ${m.content}`).join('\n'),
      faqData: JSON.stringify(faqData, null, 2)
    });
    return result.response;
  } catch (e) {
    console.error('AI chat failed:', e);
    return "I'm having a little trouble connecting to my brain right now. Please try again in a moment.";
  }
}

export async function getAITranslation(strings: LocaleStrings, language: string) {
  try {
    const translatedStrings = await translateText({
      content: strings,
      targetLanguage: language,
    });
    return translatedStrings;
  } catch (e) {
    console.error("Translation failed", e);
    return null;
  }
}
