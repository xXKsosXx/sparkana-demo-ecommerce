import Hero from "@/components/Hero";
import Valeurs from "@/components/Valeurs";
import Catalogue from "@/components/Catalogue";
import ConfigurateurCoffret from "@/components/ConfigurateurCoffret";
import BoxMois from "@/components/BoxMois";
import Atelier from "@/components/Atelier";
import Avis from "@/components/Avis";

export default function Home() {
  return (
    <main>
      <Hero />
      <Valeurs />
      <Catalogue />
      <ConfigurateurCoffret />
      <BoxMois />
      <Atelier />
      <Avis />
    </main>
  );
}
