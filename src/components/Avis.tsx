import { Star } from "lucide-react";

const avis = [
  {
    texte:
      "Le savon \u00e0 la lavande est un pur bonheur. L\u2019odeur est authentique, pas du tout chimique. Ma peau est hydrat\u00e9e comme jamais.",
    auteur: "MARIE-LAURE D.",
    ville: "N\u00eemes",
  },
  {
    texte:
      "J\u2019ai command\u00e9 un coffret personnalis\u00e9 pour un anniversaire, la pr\u00e9sentation est sublime et le message manuscrit a fait son effet.",
    auteur: "THOMAS R.",
    ville: "Montpellier",
  },
  {
    texte:
      "Abonn\u00e9e depuis 6 mois, je ne peux plus m\u2019en passer. Chaque mois c\u2019est une petite f\u00eate dans ma bo\u00eete aux lettres.",
    auteur: "SOPHIE V.",
    ville: "Uz\u00e8s",
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
