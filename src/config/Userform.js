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
    birthtDay: { type: "date", maxlength: "50", required: true },
    address: { type: "text", maxlength: "50" },
    type: {
      type: "select",
      opts: ["COORD", "ASE", "ADM"],
      required: true,
    },
  },
  action: {
    post: async function (data) {
      // console.log(data);
      let res = await fetch(`${URL}/user/emailexist/${data.email}`);
      res = await res.json();
      data["monthBirthtDay"] = data.birthtDay.split("-")[1];
      if (!res) {
        res = await fetch(`${URL}/user/new`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        res = await res.json();
        if (res.id) {
          alert("Usuario creado");
          return true;
        }
      } else {
        alert("El correo ya existe");
        return false;
      }
    },
    update: async function (data) {
      console.log(data);

      let res = await fetch(`${URL}/user/update`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await res.json();
      if (res.id) {
        alert("Usuario actualizado");
        return true;
      } else {
        alert("El correo ya existe");
        return false;
      }
    },
  },
};
export { user };
