import { Table } from "./Table";
import { FormMain } from "./FormMain";
import { OrderCoord } from "../config/OrderCoord";
import { useContext, useEffect } from "react";
import { Context } from "./Context/Context";
function DetailOrder({ order }) {
  const { setFormData } = useContext(Context);
  const headersDetail = [
    "Id",
    "Categoria",
    "talla",
    "Descripcion",
    "Disp",
    "Precio",
    "Stock",
    "Photo",
    "Solicitado",
  ];
  const normilizeData = (order) => {
    let detailT = [];
    try {
      for (let key in order.products) {
        let detail = order.products[key];
        let row = [];
        row.push(key);
        row.push(detail.category);
        row.push(detail.size);
        row.push(detail.description);
        row.push(detail.availability);
        row.push(detail.price);
        row.push(detail.quantity);
        row.push("link");
        row.push(order.quantities[key]);
        detailT.push(row);
      }
      // console.log(detailT);
      return detailT;
    } catch {
      return [[]];
    }
  };
  useEffect(() => {
    if (order.id != null) setFormData({ id: order.id, status: order.status });
  }, [order, setFormData]);

  let detailTable = normilizeData(order);

  return (
    <>
      {order.salesMan ? (
        <>
          <p>
            <strong>Id: </strong>
            {order.salesMan.id}
          </p>
          <p>
            <strong>Name: </strong>
            {order.salesMan.name}
          </p>
          <p>
            <strong>Email: </strong>
            {order.salesMan.email}
          </p>
        </>
      ) : null}

      <Table headers={headersDetail} content={detailTable} />
      <FormMain fields={OrderCoord.fields} action={OrderCoord.action} />
    </>
  );
}
export { DetailOrder };
