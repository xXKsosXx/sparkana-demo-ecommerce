import { Star } from "lucide-react";

const avis = [
  {
    texte:
      "Le savon à la lavande est un pur bonheur. L’odeur est authentique, pas du tout chimique. Ma peau est hydratée comme jamais.",
    auteur: "MARIE-LAURE D.",
    ville: "Nîmes",
  },
  {
    texte:
      "J’ai commandé un coffret personnalisé pour un anniversaire, la présentation est sublime et le message manuscrit a fait son effet.",
    auteur: "THOMAS R.",
    ville: "Montpellier",
  },
  {
    texte:
      "Abonnée depuis 6 mois, je ne peux plus m’en passer. Chaque mois c’est une petite fête dans ma boîte aux lettres.",
    auteur: "SOPHIE V.",
    ville: "Uzès",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="#c4973a"
          color="#c4973a"
          className="inline"
        />
      ))}
    </div>
  );
}

export default function Avis() {
  return (
    <section className="bg-pierre py-20 px-6">
      <h2 className="font-serif text-4xl text-brun text-center mb-12">
        Vos moments de douceur
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {avis.map((a) => (
          <div
            key={a.auteur}
            className="bg-white rounded-md shadow-sm p-6 max-w-sm mx-auto"
          >
            <Stars />
            <p className="font-serif italic text-sm text-brun/80 leading-relaxed mt-3">
              &ldquo;{a.texte}&rdquo;
            </p>
            <p className="font-sans text-xs text-brun/50 uppercase tracking-widest mt-4">
              &mdash; {a.auteur} &middot; {a.ville}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
