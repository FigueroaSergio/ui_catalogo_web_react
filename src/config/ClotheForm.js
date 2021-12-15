import { URL } from "./config";

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
      required: true,
    },
  },
  action: {
    post: async function (data, setUserData, userData) {
      data.availability = data.availability === "Si" ? true : false;
      let res = await fetch(`${URL}/clothe/new`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await res.json();
      if (res.reference) {
        alert("Prenda creada");
        return true;
      } else {
        alert("Hubo un error");
        return false;
      }
    },
    update: async function (data, setUserData, userData) {
      data.availability = data.availability === "Si" ? true : false;
      let res = await fetch(`${URL}/clothe/update`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await res.json();
      if (res.reference) {
        alert("Prenda actualizada");
        return true;
      } else {
        alert("Hubo un error");
        return false;
      }
    },
  },
};
export { clothe };
