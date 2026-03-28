import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return Response.json({ error: "Email requis" }, { status: 400 });

  await resend.emails.send({
    from: "bonjour@sparkana.fr",
    to: process.env.EMAIL_TO || "kamal@sparkana.fr",
    subject: "Nouvelle inscription newsletter \u2014 Savonnerie C\u00e9venole",
    html: `<p>Nouvel abonn\u00e9 newsletter : <strong>${email}</strong></p>`,
  });

  return Response.json({ success: true });
}
