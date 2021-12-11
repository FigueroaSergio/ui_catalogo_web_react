let clothe = {
  fields: {
    category: {
      type: "text",
      maxlength: "50",
      required: true,
    },
    size: {
      type: "text",
      maxlength: "50",
      required: true,
    },
    description: {
      type: "text",
      maxlength: "250",
      required: true,
    },

    price: {
      type: "number",
      maxlength: "50",
      required: true,
    },
    quantity: {
      type: "number",
      maxlength: "50",
      required: true,
    },
    photography: { type: "text", required: true },
    availability: {
      type: "select",
      opts: ["Si", "No"],
      edition: true,
      view: true,
      required: true,
    },
  },
  action: function (data) {
    console.log(data);
  },
};
export { clothe };
