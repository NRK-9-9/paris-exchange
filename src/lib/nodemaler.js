import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { reserveTemplate } from "./templates/reserveTemplate";

// Environment variables
const email = process.env.NEXT_PUBLIC_NODEMAILER_MAIL;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASS;
const host = process.env.NEXT_PUBLIC_NODEMAILER_HOST;
const port = parseInt(process.env.NEXT_PUBLIC_NODEMAILER_PORT || "465");

// Transport configuration
export const tpt = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

// Only verify transport in development
if (process.env.NODE_ENV !== "production") {
  tpt.verify()
    .then(() => {
      console.log("✅ Nodemailer transport is working (DEV only).");
    })
    .catch((err) => {
      console.error("❌ Nodemailer transport error:", err.message);
    });
}

// Default email metadata
export const mailOptions = {
  from: email,
  to: email, // You can change this dynamically when sending
};

// Template compiler
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
    order_type,
    currency,
    currency_amount,
    euro_amount: eur_amount,
    from_nom: prenom,
    from_prenom: nom,
    from_email: email,
    exchange_date: date,
    phone_num: phone,
    serial,
    remarque,
  });
  return htmlBody;
}
