import { Leaf, Hand, MapPin } from "lucide-react";

const valeurs = [
  {
    icon: Leaf,
    titre: "100% naturel",
    texte: "Des ingrédients sourcés localement,\nsans aucun additif chimique.",
  },
  {
    icon: Hand,
    titre: "Fait à la main",
    texte: "Chaque savon est moulé, coupé et emballé\nindividuellement dans notre atelier.",
  },
  {
    icon: MapPin,
    titre: "Gard, France",
    texte: "L’authenticité des Cévennes au cœur de\nnotre processus de fabrication.",
  },
];

export default function Valeurs() {
  return (
    <section className="bg-pierre py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">
        {valeurs.map((v) => (
          <div key={v.titre}>
            <v.icon size={28} strokeWidth={1.5} className="text-sauge mx-auto mb-4" />
            <h3 className="font-serif text-lg text-brun">{v.titre}</h3>
            <p className="font-sans text-sm text-brun/60 max-w-[200px] mx-auto mt-2 whitespace-pre-line">
              {v.texte}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
