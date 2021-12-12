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
  action: async function (data, hadleData) {
    // console.log(data);
    let res = await fetch(
      `http://localhost:8080/api/user/emailexist/${data.email}`
    );
    res = await res.json();
    if (res) {
      res = await fetch(
        `http://localhost:8080/api/user/${data.email}/${data.password}`
      );
      res = await res.json();
      if (res.id == null) {
        alert("Password incorrecta no existe");
      } else {
        hadleData(res);
      }
    } else {
      alert("Email no existe");
    }
  },
};
export { login };
