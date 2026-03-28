export default {
  name: "avis",
  title: "Avis client",
  type: "document",
  fields: [
    { name: "nom", type: "string", title: "Nom" },
    { name: "ville", type: "string", title: "Ville" },
    { name: "note", type: "number", title: "Note /5" },
    { name: "texte", type: "text", title: "Témoignage" },
    {
      name: "visible",
      type: "boolean",
      title: "Visible ?",
      initialValue: true,
    },
  ],
};
