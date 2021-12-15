let order = {
  fields: {
    product: {
      type: "select",
      url: "http://localhost:8080/api/clothe/all",
      opts: [],
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
    let products = userData.products;
    let { product, quantity } = data;
    quantity = parseInt(quantity);

    if (!products) {
      //No hay productos
      products = { [product]: quantity };
    } else {
      let oldData = userData.products[product];
      if (!oldData)
        //no existe el producto
        products = { ...products, [product]: quantity };
      else {
        products = { ...products, [product]: quantity + oldData };
      }
    }
    setUserData({ ...userData, products });
    // console.log(userData);
  },
};
export { order };
