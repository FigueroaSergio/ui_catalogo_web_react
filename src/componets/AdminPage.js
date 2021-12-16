import { useContext, useEffect, useState } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { FormMain } from "./FormMain";

import { clothe } from "../config/ClotheForm";
import { user } from "../config/Userform";

import { Context } from "./Context/Context";
import { Table } from "./Table";

import { URL } from "../config/config";

function AdminPage() {
  const normalizeData = (rawData) => {
    let data = [];
    if (actualPage === "clothe") {
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
    }
    if (actualPage === "user") {
      rawData.forEach((dato) => {
        let row = [];
        row.push(dato.id);
        row.push(dato.identification);
        row.push(dato.name);
        row.push(dato.email);
        row.push(dato.type);
        data.push(row);
      });
    }
    return data;
  };
  const deleteDato = async (id) => {
    let data = await fetch(`${URL}/${actualPage}/${id}`, { method: "delete" });

    if (data.status === 204) alert(`${actualPage} eliminido`);

    setUserData({ ...userData, update: false });
  };
  const editDato = (id) => {
    let form;

    if (actualPage === "clothe") {
      form = data.filter((opt) => opt.reference === id)[0];
      form.availability = form.availability ? "Si" : "No";
    } else {
      form = data.filter((opt) => opt.id === id)[0];
    }

    setUserData({
      ...userData,
      form,
      method: "update",
    });
    //
  };
  const { userData, setUserData } = useContext(Context);
  const [data, setData] = useState([[]]);
  const pages = ["clothe", "user"];
  const form = { clothe, user };
  let actualPage = userData.page || "user";
  let actualTable = normalizeData(data);
  let headers = {
    clothe: [
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
    user: ["#", "identification", "name", "email", "type"],
  };

  useEffect(() => {
    const getOpts = async () => {
      let data = await fetch(`${URL}/${actualPage}/all`);
      data = await data.json();

      setData(data);

      setUserData({ ...userData, update: true });

      // console.log(userData);
    };
    // console.log("jumm");
    getOpts();
  }, [actualPage, userData.update, setUserData]);
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
            <h2>
              {actualPage === "clothe"
                ? "Prendas"
                : actualPage === "user"
                ? "Usuarios"
                : null}
            </h2>
            <FormMain
              fields={form[actualPage].fields}
              action={form[actualPage].action[userData.method]}
            />
            <Table
              headers={headers[actualPage]}
              content={actualTable}
              actions={[
                { name: "Editar", action: editDato },
                { name: "x", action: deleteDato },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export { AdminPage };
