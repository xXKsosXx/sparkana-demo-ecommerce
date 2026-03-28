import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      <Image
        src="/images/hero-savonnerie.png"
        alt="Artisan savonnier dans son atelier"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brun/25" />
      <div className="absolute inset-0 flex items-end">
        <div className="px-6 md:px-16 pb-20 md:pb-28">
          <h1 className="font-serif italic text-5xl md:text-7xl text-white leading-tight">
            Les C&eacute;vennes,
            <br />
            savonn&eacute;e &agrave; la main.
          </h1>
          <p className="font-sans text-base text-white/70 mt-4 max-w-md">
            Savons naturels fabriqu&eacute;s dans notre atelier depuis 2009.
            Ingr&eacute;dients des C&eacute;vennes gardoises, sans compromis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#catalogue"
              className="bg-sauge text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-sauge/80 transition font-sans"
            >
              D&Eacute;COUVRIR LA COLLECTION
            </a>
            <a
              href="#coffret"
              className="bg-or text-brun px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-or/80 transition font-sans"
            >
              COFFRET CADEAU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
