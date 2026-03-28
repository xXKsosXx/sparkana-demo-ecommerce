"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { produits } from "@/data/produits";
import { useCart } from "@/context/CartContext";

export default function Catalogue() {
  const { addToCart } = useCart();

  return (
    <section id="catalogue" className="bg-fond py-24">
      <div className="text-center">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-sauge mb-3">
          ARTISANAT PUR
        </p>
        <h2 className="font-serif text-4xl text-brun">Nos Cr&eacute;ations</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
        {produits.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={p.image}
                alt={p.nom}
                fill
                className="object-cover"
              />
              {p.stockBas && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-sans">
                  PLUS QUE {p.stock} EN STOCK
                </span>
              )}
            </div>

            {/* Text */}
            <div className="p-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif italic text-lg text-brun">{p.nom}</h3>
                <span className="font-sans font-bold text-brun text-base">
                  {p.prixAffiche}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-500 mt-1">{p.parfum}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 border border-pierre-fonce text-brun text-[11px] tracking-[0.2em] uppercase py-2 hover:bg-pierre transition w-full flex items-center justify-center gap-2 font-sans"
              >
                <ShoppingCart size={12} />
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
