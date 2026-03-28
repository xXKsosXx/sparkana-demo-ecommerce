"use client";

import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "LA COLLECTION", href: "#catalogue" },
  { label: "L'ATELIER", href: "#atelier" },
  { label: "ABONNEMENTS", href: "#box" },
  { label: "COFFRETS", href: "#coffret" },
];

export default function Nav() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-fond/95 backdrop-blur-sm border-b border-pierre">
      <div className="py-4 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-serif italic text-lg text-brun">
          Savonnerie C&eacute;venole
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs tracking-[0.2em] uppercase text-brun/70 hover:text-brun transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Rechercher" className="text-brun/70 hover:text-brun transition">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Compte"
            className="hidden md:block text-brun/70 hover:text-brun transition"
          >
            <User size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Panier"
            onClick={openCart}
            className="relative text-brun/70 hover:text-brun transition"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-sauge text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            className="md:hidden text-brun/70 hover:text-brun transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-pierre px-6 py-4 flex flex-col gap-3 bg-fond">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs tracking-[0.2em] uppercase text-brun/70 hover:text-brun transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
