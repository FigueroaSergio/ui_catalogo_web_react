import { formDate } from "./utils";
let OrdersTable = {
  headers: ["#", "Id.Cl", "Nombres", "Email", "Fecha", "Estado", "Acciones"],
  formateData: (rawData) => {
    let data = [];
    rawData.forEach((dato) => {
      let row = [];
      row.push(dato.id);
      row.push(dato.salesMan.id);
      row.push(dato.salesMan.name);
      row.push(dato.salesMan.email);
      row.push(formDate(dato.registerDay));

      row.push(dato.status);
      data.push(row);
    });
  },
};
export default OrdersTable;
