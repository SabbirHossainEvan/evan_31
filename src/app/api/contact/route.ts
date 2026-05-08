import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to site owner
    const ownerMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
          <div style="background: linear-gradient(135deg, #34d399, #14b8a6, #22d3ee); padding: 24px 32px;">
            <h2 style="margin: 0; color: #000; font-size: 20px; font-weight: 700;">New Portfolio Message</h2>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 24px;">
              <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px 0;">From</p>
              <p style="color: #ffffff; font-size: 16px; font-weight: 600; margin: 0;">${name}</p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px 0;">Email</p>
              <p style="margin: 0;">
                <a href="mailto:${email}" style="color: #34d399; font-size: 16px; text-decoration: none;">${email}</a>
              </p>
            </div>
            <div style="margin-bottom: 0;">
              <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Message</p>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px;">
                <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>
            </div>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <p style="color: #4b5563; font-size: 12px; margin: 0;">This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to sender
    const autoReplyOptions = {
      from: `"Sabbir Hossain Evan" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
          <div style="background: linear-gradient(135deg, #34d399, #14b8a6, #22d3ee); padding: 24px 32px;">
            <h2 style="margin: 0; color: #000; font-size: 20px; font-weight: 700;">Message Received!</h2>
          </div>
          <div style="padding: 32px;">
            <p style="color: #d1d5db; font-size: 16px; line-height: 1.7; margin: 0 0 16px 0;">
              Hi <strong style="color: #ffffff;">${name}</strong>,
            </p>
            <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
              Thank you for reaching out through my portfolio! I appreciate your interest and will get back to you as soon as possible.
            </p>
            <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
              I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach me directly at:
            </p>
            <p style="margin: 0 0 16px 0;">
              <a href="mailto:evansabbir31@gmail.com" style="color: #34d399; font-size: 14px; text-decoration: none;">evansabbir31@gmail.com</a>
            </p>
            <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0;">
              Best regards,<br/>
              <strong style="color: #ffffff;">Md. Sabbir Hossain Evan</strong><br/>
              <span style="color: #6b7280; font-size: 13px;">Mobile App Developer & Web Developer</span>
            </p>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <p style="color: #4b5563; font-size: 12px; margin: 0;">This is an automated response from your portfolio.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(autoReplyOptions),
    ])

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Contact form error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
