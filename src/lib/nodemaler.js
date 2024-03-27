import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { reserveTemplate } from "./templates/reserveTemplate";

const email = process.env.NEXT_PUBLIC_NODEMAILER_MAIL;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASS;

export const tpt = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
  port: process.env.NEXT_PUBLIC_NODEMAILER_PORT,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

try {
  const res = await tpt.verify();
  console.log("Nodemailer transpot working:", res);
} catch (err) {
  console.log("Nodemailer transpot working:", err);
}

export const mailOptions = {
  from: email,
  to: email,
};

export function compileFeedbackTemplate(
  order_type,
  currency,
  currency_amount,
  eur_amount,
  prenom,
  nom,
  email,
  date,
  phone,
  serial,
  remarque
) {
  const template = handlebars.compile(reserveTemplate);
  const htmlBody = template({
    order_type: order_type,
    currency: currency,
    currency_amount: currency_amount,
    euro_amount: eur_amount,
    from_nom: prenom,
    from_prenom: nom,
    from_email: email,
    exchange_date: date,
    phone_num: phone,
    serial: serial,
    remarque: remarque,
  });
  return htmlBody;
}
