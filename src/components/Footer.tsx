"use client";

import { useState } from "react";
import { Camera, Volume2, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("idle");
    }
  };

  return (
    <footer className="bg-pierre border-t border-pierre-fonce">
      {/* Top */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 — Brand */}
        <div>
          <p className="font-serif italic text-lg text-brun">
            Savonnerie Cévenole
          </p>
          <p className="font-sans text-sm text-brun/60 mt-2 max-w-[200px]">
            L&apos;excellence de la savonnerie artisanale au cœur du Gard.
            Ingrédients naturels, fabrication lente.
          </p>
          <div className="flex gap-3 mt-4">
            <Volume2 size={16} className="text-brun/50" />
            <Camera size={16} className="text-brun/50" />
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-brun/50 mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {["La Collection", "L’Atelier", "Coffrets Cadeaux", "Abonnements"].map(
              (l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-sans text-sm text-brun/70 hover:text-brun transition"
                  >
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Col 3 — Informations */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-brun/50 mb-4">
            Informations
          </p>
          <ul className="space-y-2">
            {["Charte Qualité", "Livraison", "CGV", "Mentions Légales"].map(
              (l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-sans text-sm text-brun/70 hover:text-brun transition"
                  >
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-brun/50 mb-4">
            Newsletter
          </p>
          <p className="font-sans text-sm text-brun/60 mb-3">
            Inscrivez-vous pour recevoir nos actualités botaniques.
          </p>
          {status === "done" ? (
            <p className="font-sans text-sm text-sauge">Merci pour votre inscription !</p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex border border-pierre-fonce rounded-sm overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="bg-white px-3 py-2 text-sm flex-1 outline-none font-sans"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-brun text-white px-3 flex items-center"
                aria-label="S'inscrire"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-pierre-fonce py-6 px-6 max-w-6xl mx-auto flex justify-between flex-wrap gap-2">
        <p className="font-sans text-[11px] text-brun/40 uppercase tracking-widest">
          &copy; SAVONNERIE CÉVENOLE · FAIT DANS LE GARD AVEC AMOUR
        </p>
        <p className="font-sans text-[11px] text-brun/40 uppercase tracking-widest">
          SAVONNERIE ARTISANALE · CRUELTY FREE · ZÉRO PLASTIQUE
        </p>
      </div>
    </footer>
  );
}
