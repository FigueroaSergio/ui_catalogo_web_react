let order = {
  fields: {
    product: {
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
  action: async function (data, setUserData, userData) {
    // console.log(data);
    let { product, quantity } = data;
    quantity = parseInt(quantity);
    if (userData[product] != null) quantity += userData[product];
    setUserData({ ...userData, products: { [product]: quantity } });
  },
};
export { order };
