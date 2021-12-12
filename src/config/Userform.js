import { URL } from "./config";

let user = {
  fields: {
    identification: {
      type: "text",
      maxlength: "80",
    },
    name: {
      type: "text",
      maxlength: "80",
      required: true,
    },
    email: {
      type: "email",
      maxlength: "50",
      required: true,
    },
    password: {
      type: "password",
      maxlength: "50",
      required: true,
    },
    zone: { type: "text", maxlength: "50" },
    address: { type: "text", maxlength: "50" },
    type: {
      type: "select",
      opts: ["COORD", "ASE", "ADM"],
    },
  },
  action: async function (data) {
    // console.log(data);
    let res = await fetch(`${URL}/user/emailexist/${data.email}`);
    res = await res.json();

    if (!res) {
      res = await fetch(`${URL}/user/new`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await res.json();
      if (res.id) {
        alert("Usuario creado");
      }
    } else {
      alert("El correo ya existe");
    }
  },
};
export { user };
