import { useContext, useEffect, useState } from "react";

import { Context } from "./Context/Context";
import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { FormMain } from "./FormMain";
import { Table } from "./Table";
import { Modal } from "./Modal";

import { order } from "../config/OrderForm";
import { URL } from "../config/config";
import { TableProductos } from "./TableProductos";

function AsesorPage() {
  const normilizeData = (data) => {
    let datos = [];
    if (Object.keys(data).length === 0) {
      return [[]];
    }
    for (let key in data) {
      let row = [];
      row.push(key);
      row.push(data[key]);
      datos.push(row);
    }
    // console.log(datos);
    return datos;
  };
  const { userData, setUserData } = useContext(Context);
  const [form, setForm] = useState(order);
  const [options, setOptions] = useState([]);
  const products = userData.products ? normilizeData(userData.products) : [[]];

  const pages = ["order"];

  let actualPage = userData.page || "order";

  useEffect(() => {
    // console.log("entre_");
    let options;
    const getOpts = async () => {
      options = await fetch(order.fields.product.url);
      let newOptions = JSON.parse(JSON.stringify(order));
      newOptions["action"] = order.action;
      options = await options.json();
      await options.forEach((product) => {
        newOptions.fields.product.opts.push(product.reference);
      });
      // setUserData({ ...userData, options });
      setForm(newOptions);
      setOptions(options);
    };
    getOpts();

    //console.log(form);
  }, []);
  const deleteElement = (id) => {
    let newData = JSON.parse(JSON.stringify(userData));
    delete newData.products[id];
    // console.log(newData);
    setUserData(newData);
  };
  let ordenar = async () => {
    let order = {
      salesMan: userData.user,
      quantities: userData.products,
      registerDay: new Date(),
      products: {},
    };
    for (let key in userData.products) {
      // console.log(key);

      order.products = {
        ...order.products,
        [key]: options.filter((opt) => opt.reference === key)[0],
      };
    }
    // console.log(options);
    console.log(order);
    let res = await fetch(`${URL}/order/new`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    res = await res.json();
    // console.log(res);
    if (res.id) {
      alert("orden creada");
      setUserData({ ...userData, products: {} });
    } else {
      alert("Hubo un error");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar>
            {pages.map((page) => (
              <NavItem text={page} key={page} state={actualPage} />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <h2>Ordernar</h2>
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
            >
              Nuevo
            </button>
            <TableProductos />
            <Modal title="Ordenar">
              <FormMain fields={form.fields} action={form.action} />
              <Table
                headers={["Referencia", "Cantidad", "Acciones"]}
                content={products}
                actions={[{ name: "x", action: deleteElement }]}
              />
              {products[0].length > 0 ? (
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={ordenar}
                >
                  Ordenar
                </button>
              ) : null}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export { AsesorPage };
