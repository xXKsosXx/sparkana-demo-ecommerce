import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

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
            <PlaceholderImage
              label="atelier-interieur — \u00e9tag\u00e8res s\u00e9chage"
              className="aspect-square rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <PlaceholderImage
              label="atelier-huiles — huiles et aromates"
              className="aspect-square rounded-md w-full"
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
            Nich&eacute;e au c&oelig;ur du Gard, notre savonnerie est n&eacute;e d&rsquo;un
            d&eacute;sir de retour aux sources et au vrai geste artisanal. Chaque matin,
            le parfum du thym et de la lavande sauvage envahit notre atelier.
          </p>
          <p className="font-sans text-sm text-brun/70 leading-relaxed mt-3">
            Nous utilisons la m&eacute;thode de saponification &agrave; froid pour
            pr&eacute;server les vertus des huiles v&eacute;g&eacute;tales et offrir &agrave;
            votre peau une douceur incomparable, h&eacute;rit&eacute;e des traditions
            ancestrales des C&eacute;vennes.
          </p>
          <a
            href="#"
            className="font-sans text-xs tracking-[0.2em] uppercase text-sauge mt-6 border-b border-sauge pb-1 inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            VISITER L&rsquo;ATELIER
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
