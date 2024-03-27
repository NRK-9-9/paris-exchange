import { tpt, mailOptions, compileFeedbackTemplate } from "@/lib/nodemaler";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const {
    order_type,
    currency,
    currency_amount,
    euro_amount,
    from_nom,
    from_prenom,
    from_email,
    exchange_date,
    phone_num,
    serial,
    remarque,
  } = data;

  try {
    await tpt.sendMail({
      from: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      replyTo: from_email,
      subject: `Reservation ${from_email}`,
      html: compileFeedbackTemplate(
        order_type,
        currency,
        currency_amount,
        euro_amount,
        from_nom,
        from_prenom,
        from_email,
        exchange_date,
        phone_num,
        serial,
        remarque
      ),
    });
    return NextResponse.json(
      {
        message: "Success: email was sent",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: error }, { status: 500 });
  }
}
