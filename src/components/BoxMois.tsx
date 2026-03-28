import { Sparkles, Truck, RotateCcw, Star } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    titre: "3 savons surprise",
    texte: "D\u00e9couvrez nos derni\u00e8res cr\u00e9ations et\n\u00e9ditions limit\u00e9es saisonni\u00e8res.",
  },
  {
    icon: Truck,
    titre: "Livraison offerte",
    texte: "Directement dans votre bo\u00eete aux lettres,\nchaque premier du mois.",
  },
  { icon: RotateCcw, titre: "R\u00e9siliation en 1 clic", texte: "" },
  { icon: Star, titre: "Acc\u00e8s prioritaire nouveaut\u00e9s", texte: "" },
];

export default function BoxMois() {
  return (
    <section id="box" className="bg-sauge py-24 px-6 relative overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 20c-40 60-120 80-160 140s20 120 80 160 140-20 200-80 0-160-40-200-40-60-80-20z"
          fill="white"
        />
      </svg>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/60 mb-3">
            L&rsquo;ABONNEMENT SAVONNERIE
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl text-white">
            Recevez la s&eacute;lection du mois
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.titre} className="flex gap-4 items-start">
                <f.icon size={20} className="text-or flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-sm text-white/80">{f.titre}</p>
                  {f.texte && (
                    <p className="font-sans text-xs text-white/55 whitespace-pre-line mt-1">
                      {f.texte}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-white/10 backdrop-blur rounded-md p-8">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-5xl text-white">24&euro;</span>
              <span className="font-sans text-sm text-white/60">/mois</span>
            </div>
            <button className="bg-or text-brun w-full py-4 mt-6 text-xs tracking-[0.2em] uppercase font-bold font-sans hover:bg-or/80 transition">
              S&rsquo;ABONNER &mdash; 24&euro;/MOIS
            </button>
            <p className="font-sans text-[11px] text-white/50 text-center mt-3">
              SANS ENGAGEMENT &middot; R&Eacute;SILIABLE EN UN CLIC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
