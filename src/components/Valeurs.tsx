import { Leaf, Hand, MapPin } from "lucide-react";

const valeurs = [
  {
    icon: Leaf,
    titre: "100% naturel",
    texte: "Des ingr\u00e9dients sourc\u00e9s localement,\nsans aucun additif chimique.",
  },
  {
    icon: Hand,
    titre: "Fait \u00e0 la main",
    texte: "Chaque savon est moul\u00e9, coup\u00e9 et emball\u00e9\nindividuellement dans notre atelier.",
  },
  {
    icon: MapPin,
    titre: "Gard, France",
    texte: "L\u2019authenticit\u00e9 des C\u00e9vennes au c\u0153ur de\nnotre processus de fabrication.",
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
