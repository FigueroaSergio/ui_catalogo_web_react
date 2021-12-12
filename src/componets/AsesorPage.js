import { useState } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { FormMain } from "./FormMain";
import { Table } from "./Table";
import { order } from "../config/OrderForm";

import { URL } from "../config/config";

function AsesorPage({ userData, setUserData }) {
  const pages = ["order"];
  const [actualPage, setActualPage] = useState("order");
  const [products, setProducts] = useState({});
  //   console.log(userData);
  //   console.log(products);

  let ordenar = async () => {
    let order = {
      salesMan: userData.user,
      quantities: products,
      registerDay: new Date(),
      products: {},
    };
    for (let key in products) {
      let product = await fetch(`${URL}/clothe/${key}`);
      product = await product.json();
      //   console.log(product);
      order.products[key] = product;
    }
    // console.log(order)
    let res = await fetch(`${URL}/order/new`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    res = await res.json();
    console.log(res);
    if (res.id) {
      alert("orden creada");
      setProducts({});
    } else {
      alert("Hubo un error");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar userData={userData} setUserData={setUserData}>
            {pages.map((page) => (
              <NavItem
                text={page}
                key={page}
                state={actualPage}
                setActualPage={setActualPage}
              />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <FormMain
              fields={order.fields}
              action={order.action}
              setUserData={setProducts}
              userData={products}
            />
            <Table setUserData={setProducts} userData={products} />
            {Object.keys(products).length > 0 ? (
              <button className="btn btn-sm btn-outline-dark" onClick={ordenar}>
                Ordenar
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export { AsesorPage };
