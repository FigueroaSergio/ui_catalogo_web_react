let order = {
  fields: {
    products: {
      type: "select",
      opts: "http://localhost:8080/api/clothe/all",
      required: true,
    },
    quantity: {
      type: "number",
      maxlength: "50",
      required: true,
    },
  },
  action: async function (data) {
    console.log(data);
  },
};
export { order };
