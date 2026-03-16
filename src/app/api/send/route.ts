import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, message } = body;

    const data = await resend.emails.send({
      // Branding tetap pakai nama PT, tapi alamat wajib onboarding@resend.dev
      from: 'PT. Wartiwan Industri Nusantara <onboarding@resend.dev>',
      // Ganti dengan email yang kamu gunakan untuk login di dashboard Resend
      to: ['wartiwanindustrial@gmail.com'],
      subject: `Inquiry Partner: ${companyName}`,
      replyTo: email, // Memudahkan admin balas langsung ke email pengirim
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0a0a0a; padding: 30px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 20px; letter-spacing: 2px;">WARTIWAN INDUSTRIAL</h1>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 5px;">NEW MANUFACTURING INQUIRY</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #475569; font-size: 14px;">Halo Admin,</p>
            <p style="color: #1e293b; font-size: 16px;">Seseorang telah mengirimkan pesan melalui form kerjasama di website:</p>
            
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 35%;">Nama Lengkap</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Perusahaan</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: bold;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email Bisnis</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${email}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Pesan:</p>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; font-size: 14px; line-height: 1.6; border-left: 4px solid #f59e0b;">
                ${message}
              </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #f59e0b; color: #0a0a0a; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">BALAS EMAIL SEKARANG</a>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">Automated message from wartiwan-industri.vercel.app</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
