import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sentence from "@/components/sentence";
import "../globals.css";

export const metadata = {
  title: {
    default: "Paris Exchange Saint Michel",
    template: "%s | Paris Exchange",
  },
  description:
    "Meilleur bureau de change sur paris Saint michel pour changes les devises exchange états unis, canada, suisse, japon, etc... Meilleurs taux garanties",
  keywords: [
    "currency",
    "best exchange rate",
    "meilleur echange rate",
    "Meilleurs prix de change",
    "paris",
    "exchange candian paris",
    "exchange pound paris",
    "exchange swiss paris",
    "exchange japonais paris",
    "fontaine saint michel",
    "saint michel",
    "devises",
    "best rate",
    "paris stock exchange",
  ],
  authors: [
    { name: "Mark Hammoud" },
    { name: "Najib Mansour", url: "https://github.com/Najibmansour" },
  ],
  creator: "Najib Mansour",
  openGraph: {
    title: "Paris Exchange Saint Michel",
    description:
      "Meilleur bureau de change sur paris Saint michel pour changes les devises exchange états unis, canada, suisse, japon, etc... Meilleurs taux garanties",
    url: "https://paris-exchange.vercel.app",
    siteName: "Paris Exchange Saint Michel",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  verification: {
    google: "kBJm9wyrpm0r_gQLJ71zSqneHWbFjqmG2_th1DkF018",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
