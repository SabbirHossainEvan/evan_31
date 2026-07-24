import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isAuthError(error: unknown) {
  return (
    typeof error === 'object' &&
    error !== null &&
    ('code' in error || 'responseCode' in error) &&
    ((error as { code?: unknown }).code === 'EAUTH' ||
      (error as { responseCode?: unknown }).responseCode === 535)
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()

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

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const isGmailSmtp = smtpHost.includes('gmail.com')
    const authPass = isGmailSmtp ? smtpPass?.replace(/[\s-]/g, '') : smtpPass

    if (!smtpUser || !authPass || !contactEmail) {
      console.error('Contact form SMTP configuration is missing required values')
      return NextResponse.json(
        { error: 'Email service is not configured yet' },
        { status: 500 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: authPass,
      },
    })

    // Email to site owner
    const ownerMailOptions = {
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: contactEmail,
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
              <p style="color: #ffffff; font-size: 16px; font-weight: 600; margin: 0;">${safeName}</p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px 0;">Email</p>
              <p style="margin: 0;">
                <a href="mailto:${safeEmail}" style="color: #34d399; font-size: 16px; text-decoration: none;">${safeEmail}</a>
              </p>
            </div>
            <div style="margin-bottom: 0;">
              <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Message</p>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px;">
                <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
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
      from: `"Sabbir Hossain Evan" <${smtpUser}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
          <div style="background: linear-gradient(135deg, #34d399, #14b8a6, #22d3ee); padding: 24px 32px;">
            <h2 style="margin: 0; color: #000; font-size: 20px; font-weight: 700;">Message Received!</h2>
          </div>
          <div style="padding: 32px;">
            <p style="color: #d1d5db; font-size: 16px; line-height: 1.7; margin: 0 0 16px 0;">
              Hi <strong style="color: #ffffff;">${safeName}</strong>,
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

    if (isAuthError(error)) {
      return NextResponse.json(
        { error: 'Email login failed. Use a valid Gmail App Password in SMTP_PASS.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
