let ClotheTable = {
  headers: [
    "#",
    "Categoria",
    "Talla",
    "Descripcion",
    "Disp.",
    "Precio",
    "Cantidad",
    "Photography",
    "Acciones",
  ],
  formateData: (rawData) => {
    let data = [];
    rawData.forEach((dato) => {
      let row = [];
      row.push(dato.reference);
      row.push(dato.category);
      row.push(dato.size);
      row.push(dato.description);
      let ava = dato.availability ? "Si" : "No";

      row.push(ava);
      row.push(dato.price);
      row.push(dato.quantity);
      row.push("link");
      data.push(row);
    });
    return data;
  },
};
export default ClotheTable;
