import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function MerciPage() {
  return (
    <div className="bg-fond min-h-screen flex items-center justify-center px-6">
      <div className="bg-white rounded-md shadow-sm p-12 max-w-md text-center">
        <CheckCircle
          size={56}
          className="text-sauge mx-auto mb-6"
          strokeWidth={1.5}
        />
        <h1 className="font-serif italic text-3xl text-brun">
          Merci pour votre commande !
        </h1>
        <p className="font-sans text-sm text-brun/60 mt-4">
          Vous recevrez un email de confirmation sous peu. Votre commande sera
          préparée avec soin dans notre atelier.
        </p>
        <Link
          href="/"
          className="bg-sauge text-white px-8 py-3 mt-8 inline-block text-xs tracking-widest uppercase font-sans hover:bg-sauge/90 transition"
        >
          ← Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
