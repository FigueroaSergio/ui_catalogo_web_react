import { URL } from "./config";
let login = {
  fields: {
    email: {
      type: "email",
      required: true,
    },
    password: {
      type: "password",
      required: true,
    },
  },
  action: async function (data, setUserData) {
    // console.log(data);
    let res = await fetch(`${URL}/user/emailexist/${data.email}`);
    res = await res.json();
    if (res) {
      res = await fetch(`${URL}/user/${data.email}/${data.password}`);
      res = await res.json();
      if (res.id == null) {
        alert("Password incorrecta no existe");
      } else {
        setUserData({ user: res });
      }
    } else {
      alert("Email no existe");
    }
  },
};
export { login };
