"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { produits } from "@/data/produits";
import { useCart } from "@/context/CartContext";
import PlaceholderImage from "./PlaceholderImage";

const savonsDisponibles = produits.filter((p) => p.id !== "coffret");
const prixCoffret: Record<number, number> = { 3: 23, 5: 36, 7: 48 };

export default function ConfigurateurCoffret() {
  const [taille, setTaille] = useState<3 | 5 | 7>(3);
  const [selectionnes, setSelectionnes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();

  const toggle = (id: string) => {
    if (selectionnes.includes(id)) {
      setSelectionnes((prev) => prev.filter((s) => s !== id));
    } else if (selectionnes.length < taille) {
      setSelectionnes((prev) => [...prev, id]);
    }
  };

  const changeTaille = (t: 3 | 5 | 7) => {
    setTaille(t);
    setSelectionnes((prev) => prev.slice(0, t));
  };

  const prix = prixCoffret[taille];
  const complet = selectionnes.length === taille;

  const handleAjouter = () => {
    if (!complet) return;
    const noms = selectionnes
      .map((id) => savonsDisponibles.find((p) => p.id === id)?.nom)
      .filter(Boolean)
      .join(", ");
    addToCart({
      id: `coffret-perso-${taille}-${Date.now()}`,
      nom: `Coffret ${taille} savons`,
      parfum: noms,
      prix,
      prixAffiche: `${prix},00€`,
      image: "/images/coffret-decouverte.png",
    });
  };

  return (
    <section id="coffret" className="bg-pierre py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-sauge">
            SUR MESURE
          </p>
          <h2 className="font-serif text-4xl text-brun mt-2">
            Composez votre coffret cadeau
          </h2>
          <p className="font-sans text-sm text-brun/60 mt-3 max-w-sm">
            Offrez une expérience sensorielle unique en sélectionnant vos
            fragrances préférées dans un écrin de bois artisanal.
          </p>

          {/* Size selector */}
          <p className="text-[11px] uppercase tracking-widest text-brun/50 mt-6 mb-2 font-sans">
            NOMBRE DE SAVONS
          </p>
          <div className="flex gap-2">
            {([3, 5, 7] as const).map((t) => (
              <button
                key={t}
                onClick={() => changeTaille(t)}
                className={`border text-sm px-5 py-2 transition font-sans ${
                  taille === t
                    ? "bg-sauge text-white border-sauge"
                    : "bg-white text-brun border-pierre-fonce"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Message */}
          <p className="text-[11px] uppercase tracking-widest text-brun/50 mt-6 mb-2 font-sans">
            MESSAGE PERSONNALISÉ
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border border-pierre-fonce rounded-sm p-3 w-full font-sans text-sm text-brun resize-none"
            rows={3}
            placeholder="Votre mot doux ici..."
            maxLength={150}
          />

          {/* CTA */}
          <button
            onClick={handleAjouter}
            disabled={!complet}
            className={`w-full py-4 mt-6 text-xs tracking-[0.2em] uppercase font-bold font-sans transition ${
              complet
                ? "bg-or text-brun hover:bg-or/80"
                : "bg-or/50 text-brun/50 cursor-not-allowed"
            }`}
          >
            AJOUTER LE COFFRET PERSONNALISÉ — {prix}€
          </button>

          {selectionnes.length > 0 && (
            <p className="font-sans text-xs text-brun/60 mt-3 text-center">
              {selectionnes.length}/{taille} savons sélectionnés
            </p>
          )}
        </div>

        {/* Right image — desktop only */}
        <div className="hidden lg:block relative">
          <PlaceholderImage
            label="coffret-bois — écrin bois artisanal luxe"
            className="aspect-[4/3] rounded-sm w-full h-full"
          />
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-4 rounded-md shadow-lg">
            <p className="font-serif italic text-sm text-brun">
              “Un cadeau intemporel”
            </p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-sauge mt-1">
              FABRICATION ARTISANALE
            </p>
          </div>
        </div>
      </div>

      {/* Soap grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-3 mt-8">
        {savonsDisponibles.map((s) => {
          const selected = selectionnes.includes(s.id);
          const disabled = !selected && selectionnes.length >= taille;
          return (
            <button
              key={s.id}
              onClick={() => !disabled && toggle(s.id)}
              className={`bg-white rounded-md overflow-hidden transition relative border-2 ${
                selected
                  ? "border-sauge"
                  : disabled
                  ? "opacity-40 cursor-not-allowed border-transparent"
                  : "border-transparent hover:border-pierre-fonce cursor-pointer"
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={s.image}
                  alt={s.nom}
                  fill
                  className="object-cover"
                />
                {selected && (
                  <div className="absolute inset-0 bg-sauge/20 flex items-center justify-center">
                    <Check size={20} className="text-sauge" />
                  </div>
                )}
              </div>
              <p className="font-serif italic text-xs text-brun text-center p-1">
                {s.nom}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
