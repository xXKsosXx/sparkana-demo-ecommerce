export default {
  name: "parametres",
  title: "Paramètres",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "livraisonGratuiteMin",
      type: "number",
      title: "Livraison gratuite dès (€)",
      initialValue: 40,
    },
    {
      name: "codePromoBox",
      type: "string",
      title: "Code promo box",
      initialValue: "GARRIGUE",
    },
    {
      name: "messageBandeau",
      type: "string",
      title: "Message bandeau promo",
    },
  ],
};
