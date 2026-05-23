import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "../components/AnimationProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Body by Beecee | Beauty Beyond Age",
  description:
    "A modern cosmetic landing page with a featured product, live cart, and promo codes.",
  icons: {
    icon: "/images/brand/body-by-beecee-logo.png",
  },
};

export const viewport = {
  themeColor: "#d3003c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
