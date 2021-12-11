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
  action: function (data) {
    console.log(data);
  },
};
export { user };
