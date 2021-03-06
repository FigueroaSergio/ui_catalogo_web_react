import { URL } from "./config";
let OrderCoord = {
  fields: {
    status: {
      type: "select",
      opts: ["Pendiente", "Aprobada", "Rechazada"],
      required: true,
    },
  },
  action: async function (data) {
    console.log(data);
    let res = await fetch(`${URL}/order/update`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    res = await res.json();
    console.log(data);
    if (res.id) {
      alert("Order actualizada");
      return true;
    } else {
      alert("Hubo un error");
      return true;
    }
  },
};
export { OrderCoord };
