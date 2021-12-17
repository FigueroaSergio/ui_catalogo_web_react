import { formDate } from "./utils";
let UserTable = {
  headers: [
    "#",
    "identification",
    "name",
    "email",
    "Birthday",
    "Type",
    "Acciones",
  ],
  formateData: (rawData) => {
    let data = [];
    rawData.forEach((dato) => {
      let row = [];
      row.push(dato.id);
      row.push(dato.identification);
      row.push(dato.name);
      row.push(dato.email);
      row.push(formDate(dato.birthtDay));
      row.push(dato.type);

      data.push(row);
    });
    return data;
  },
};
export default UserTable;
