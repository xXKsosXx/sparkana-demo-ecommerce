export const dynamic = "force-dynamic";

import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return Response.json({ error: "Email requis" }, { status: 400 });

  const resend = getResend();
  await resend.emails.send({
    from: "bonjour@sparkana.fr",
    to: process.env.EMAIL_TO || "kamal@sparkana.fr",
    subject: "Nouvelle inscription newsletter — Savonnerie Cévenole",
    html: `<p>Nouvel abonné newsletter : <strong>${email}</strong></p>`,
  });

  return Response.json({ success: true });
}
