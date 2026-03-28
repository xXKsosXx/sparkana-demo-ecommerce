import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savonnerie C\u00e9venole \u00b7 C\u00e9vennes, Gard",
  description:
    "Savons artisanaux naturels fabriqu\u00e9s dans les C\u00e9vennes depuis 2009. Ingr\u00e9dients locaux, z\u00e9ro compromis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="bg-fond text-brun font-sans antialiased">
        <CartProvider>
          <Nav />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
