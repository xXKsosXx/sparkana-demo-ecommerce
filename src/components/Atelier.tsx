import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Atelier() {
  return (
    <section id="atelier" className="bg-fond py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — asymmetric images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/atelier-artisan.png"
              alt="Famille devant l'atelier"
              width={400}
              height={600}
              className="aspect-[2/3] object-cover rounded-md w-full h-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/atelier-interieur.png"
              alt="Étagères de séchage dans l'atelier"
              width={400}
              height={400}
              className="aspect-square object-cover rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/images/atelier-huiles.png"
              alt="Huiles essentielles et aromates"
              width={400}
              height={400}
              className="aspect-square object-cover rounded-md w-full"
            />
          </div>
        </div>

        {/* Right — text */}
        <div className="max-w-md">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-sauge mb-4">
            NOTRE HISTOIRE
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brun">
            Depuis 2009, notre famille
            <br />
            fabrique avec passion
          </h2>
          <p className="font-sans text-sm text-brun/70 leading-relaxed mt-4">
            Nichée au cœur du Gard, notre savonnerie est née d&apos;un
            désir de retour aux sources et au vrai geste artisanal. Chaque matin,
            le parfum du thym et de la lavande sauvage envahit notre atelier.
          </p>
          <p className="font-sans text-sm text-brun/70 leading-relaxed mt-3">
            Nous utilisons la méthode de saponification à froid pour
            préserver les vertus des huiles végétales et offrir à
            votre peau une douceur incomparable, héritée des traditions
            ancestrales des Cévennes.
          </p>
          <a
            href="#"
            className="font-sans text-xs tracking-[0.2em] uppercase text-sauge mt-6 border-b border-sauge pb-1 inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            VISITER L&apos;ATELIER
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
