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
    prixAffiche: "8,50\u20ac",
    stock: 12,
    stockBas: false,
    image: "/images/savon-lavande.png",
    description:
      "Huile de lavande fine, beurre de karit\u00e9, argile blanche.",
  },
  {
    id: "argile",
    nom: "Savon Argile",
    parfum: "Purifiant & Min\u00e9ral",
    prix: 8.5,
    prixAffiche: "8,50\u20ac",
    stock: 3,
    stockBas: true,
    image: "/images/savon-argile.png",
    description:
      "Argile verte du Gard, huile essentielle eucalyptus.",
  },
  {
    id: "miel-thym",
    nom: "Savon Miel Thym",
    parfum: "Nourrissant & Herbac\u00e9",
    prix: 9.5,
    prixAffiche: "9,50\u20ac",
    stock: 8,
    stockBas: false,
    image: "/images/savon-miel.png",
    description:
      "Miel du Gard, thym sauvage, huile d'olive extra vierge.",
  },
  {
    id: "cedre",
    nom: "Savon C\u00e8dre",
    parfum: "Bois\u00e9 & Puissant",
    prix: 9.5,
    prixAffiche: "9,50\u20ac",
    stock: 6,
    stockBas: false,
    image: "/images/savon-cedre.png",
    description:
      "Huile essentielle de c\u00e8dre, zeste d'orange bio, karit\u00e9.",
  },
  {
    id: "romarin",
    nom: "Savon Romarin",
    parfum: "Tonifiant & Frais",
    prix: 8.5,
    prixAffiche: "8,50\u20ac",
    stock: 2,
    stockBas: true,
    image: "/images/savon-romarin.png",
    description: "Romarin sauvage, huile de pin, argile rose.",
  },
  {
    id: "coffret",
    nom: "Coffret D\u00e9couverte",
    parfum: "L'Essentiel C\u00e9venol",
    prix: 45.0,
    prixAffiche: "45,00\u20ac",
    stock: 15,
    stockBas: false,
    image: "/images/coffret-decouverte.png",
    description:
      "Votre s\u00e9lection dans une bo\u00eete kraft recycl\u00e9e.",
  },
];
