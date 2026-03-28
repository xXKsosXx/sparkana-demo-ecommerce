export interface Produit {
  id: string;
  nom: string;
  parfum: string;
  prix: number;
  prixAffiche: string;
  stock: number;
  stockBas: boolean;
  image: string;
  description: string;
}

export const produits: Produit[] = [
  {
    id: "lavande",
    nom: "Savon Lavande",
    parfum: "Apaisant & Floral",
    prix: 8.5,
    prixAffiche: "8,50€",
    stock: 12,
    stockBas: false,
    image: "/images/savon-lavande.png",
    description:
      "Huile de lavande fine, beurre de karité, argile blanche.",
  },
  {
    id: "argile",
    nom: "Savon Argile",
    parfum: "Purifiant & Minéral",
    prix: 8.5,
    prixAffiche: "8,50€",
    stock: 3,
    stockBas: true,
    image: "/images/savon-argile.png",
    description:
      "Argile verte du Gard, huile essentielle eucalyptus.",
  },
  {
    id: "miel-thym",
    nom: "Savon Miel Thym",
    parfum: "Nourrissant & Herbacé",
    prix: 9.5,
    prixAffiche: "9,50€",
    stock: 8,
    stockBas: false,
    image: "/images/savon-miel.png",
    description:
      "Miel du Gard, thym sauvage, huile d'olive extra vierge.",
  },
  {
    id: "cedre",
    nom: "Savon Cèdre",
    parfum: "Boisé & Puissant",
    prix: 9.5,
    prixAffiche: "9,50€",
    stock: 6,
    stockBas: false,
    image: "/images/savon-cedre.png",
    description:
      "Huile essentielle de cèdre, zeste d'orange bio, karité.",
  },
  {
    id: "romarin",
    nom: "Savon Romarin",
    parfum: "Tonifiant & Frais",
    prix: 8.5,
    prixAffiche: "8,50€",
    stock: 2,
    stockBas: true,
    image: "/images/savon-romarin.png",
    description: "Romarin sauvage, huile de pin, argile rose.",
  },
  {
    id: "coffret",
    nom: "Coffret Découverte",
    parfum: "L'Essentiel Cévenol",
    prix: 45.0,
    prixAffiche: "45,00€",
    stock: 15,
    stockBas: false,
    image: "/images/coffret-decouverte.png",
    description:
      "Votre sélection dans une boîte kraft recyclée.",
  },
];
