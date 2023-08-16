import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "Paris Exchange",
    template: "%s | Paris Exchange",
  },
  description:
    "Meilleur bureau de change pour changer les devises sur paris Saint michel , à gauche de la fontaine. Currency exchange shop in paris Saint Michel , best exchange rate guaranteed",
  keywords: [
    "currency",
    "best exchange rate",
    "meilleur echange rate",
    "Meilleurs prix de change",
    "paris",
    "france",
    "fontaine saint michel",
    "saint michel",
    "devise",
    "devises",
    "best rate",
    "paris stock exchange",
  ],
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
    //     {/* <Navbar /> */}
    //     {children}
    //     {/* <Footer /> */}
    //   </body>
    // </html>
    <html>{children}</html>
  );
}
