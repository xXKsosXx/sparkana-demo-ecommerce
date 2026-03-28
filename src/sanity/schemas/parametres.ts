export default {
  name: "parametres",
  title: "Param\u00e8tres",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "livraisonGratuiteMin",
      type: "number",
      title: "Livraison gratuite d\u00e8s (\u20ac)",
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
