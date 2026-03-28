export default {
  name: "produit",
  title: "Produit",
  type: "document",
  fields: [
    { name: "nom", type: "string", title: "Nom" },
    { name: "parfum", type: "string", title: "Parfum / Sous-titre" },
    { name: "prix", type: "number", title: "Prix HT (€)" },
    { name: "stock", type: "number", title: "Stock" },
    { name: "stockBas", type: "boolean", title: "Stock bas ?" },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    { name: "description", type: "text", title: "Description courte" },
    {
      name: "actif",
      type: "boolean",
      title: "Actif ?",
      initialValue: true,
    },
    { name: "ordre", type: "number", title: "Ordre affichage" },
  ],
};
