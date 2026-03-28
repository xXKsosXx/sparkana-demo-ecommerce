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
  title: "Savonnerie Cévenole · Cévennes, Gard",
  description:
    "Savons artisanaux naturels fabriqués dans les Cévennes depuis 2009. Ingrédients locaux, zéro compromis.",
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
