import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOrderConfirmation(
  email: string,
  name: string,
  orderId: string,
  total: number
) {
  return resend.emails.send({
    from: "BJ Jewelry <orders@bjjewelry.in>",
    to: email,
    subject: `Order Confirmed – ${orderId}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:auto;background:#fff;border:1px solid #C9A84C;padding:40px;">
        <h1 style="color:#C9A84C;font-size:28px;margin-bottom:8px;">BJ Jewelry</h1>
        <p style="color:#666;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-top:0;">Est. 2007 · Hyderabad & Chennai</p>
        <hr style="border:none;border-top:1px solid #e0d4a8;margin:24px 0;" />
        <h2 style="color:#1a1a1a;">Thank you, ${name}!</h2>
        <p style="color:#444;line-height:1.7;">
          Your order <strong style="color:#C9A84C;">#${orderId}</strong> has been confirmed.
          Total amount: <strong>₹${total.toLocaleString("en-IN")}</strong>
        </p>
        <p style="color:#444;line-height:1.7;">
          We will process and ship your jewellery within 3–5 business days.
          For any queries, WhatsApp us at <strong>+91 9444963811</strong>.
        </p>
        <hr style="border:none;border-top:1px solid #e0d4a8;margin:24px 0;" />
        <p style="color:#999;font-size:12px;text-align:center;">BJ Jewelry · Hyderabad · Chennai</p>
      </div>
    `,
  });
}

export async function sendAppointmentConfirmation(
  email: string,
  name: string,
  date: string,
  timeSlot: string,
  type: string
) {
  return resend.emails.send({
    from: "BJ Jewelry <appointments@bjjewelry.in>",
    to: email,
    subject: `Appointment Confirmed – BJ Jewelry`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:auto;background:#fff;border:1px solid #C9A84C;padding:40px;">
        <h1 style="color:#C9A84C;font-size:28px;margin-bottom:8px;">BJ Jewelry</h1>
        <p style="color:#666;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-top:0;">Est. 2007 · Hyderabad & Chennai</p>
        <hr style="border:none;border-top:1px solid #e0d4a8;margin:24px 0;" />
        <h2 style="color:#1a1a1a;">Appointment Confirmed, ${name}!</h2>
        <p style="color:#444;line-height:1.7;">
          <strong>Date:</strong> ${date}<br/>
          <strong>Time:</strong> ${timeSlot}<br/>
          <strong>Type:</strong> ${type}
        </p>
        <p style="color:#444;line-height:1.7;">
          We look forward to welcoming you. For changes, call us at <strong>+91 9444963811</strong>.
        </p>
        <hr style="border:none;border-top:1px solid #e0d4a8;margin:24px 0;" />
        <p style="color:#999;font-size:12px;text-align:center;">BJ Jewelry · Hyderabad · Chennai</p>
      </div>
    `,
  });
}
