"use client";

import Image from "next/image";
import { X, ShoppingBag, Trash2, Lock, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, removeFromCart, updateQuantity } =
    useCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Erreur lors de la redirection vers le paiement.");
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-fond z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-pierre flex justify-between items-center">
          <h2 className="font-serif text-xl text-brun">Votre panier</h2>
          <button onClick={closeCart} aria-label="Fermer le panier">
            <X size={20} className="text-brun cursor-pointer" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <ShoppingBag size={48} className="text-pierre-fonce" />
              <p className="font-sans text-sm text-brun/50">
                Votre panier est vide
              </p>
            </div>
          ) : (
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 py-4 border-b border-pierre"
                >
                  <div className="w-[60px] h-[60px] relative flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.nom}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif italic text-sm text-brun">
                      {item.nom}
                    </p>
                    <p className="font-sans text-xs text-gray-500">
                      {item.parfum}
                    </p>
                    <p className="font-sans font-bold text-brun text-sm mt-1">
                      {item.prixAffiche}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-pierre rounded px-2 py-1 text-sm text-brun"
                        aria-label="Diminuer"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-brun w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-pierre rounded px-2 py-1 text-sm text-brun"
                        aria-label="Augmenter"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={14} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-pierre">
            <p className="font-sans text-xs text-brun/60 mb-4">
              {total >= 40
                ? "Livraison offerte"
                : `Plus que ${(40 - total).toFixed(2)}€ pour la livraison offerte`}
            </p>
            <div className="flex justify-between font-sans font-bold text-brun mb-4">
              <span>Sous-total</span>
              <span>{total.toFixed(2)}€</span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-sauge text-white w-full py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-sauge/90 transition"
            >
              PROCÉDER AU PAIEMENT — {total.toFixed(2)}€
            </button>
            <p className="font-sans text-xs text-center text-brun/50 mt-3 flex items-center justify-center gap-1">
              <Lock size={11} />
              Paiement 100% sécurisé
            </p>
          </div>
        )}
      </div>
    </>
  );
}
