import { useContext, useEffect, useState } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { FormMain } from "./FormMain";
import { Table } from "./Table";
import { Modal } from "./Modal";

import { clothe } from "../config/ClotheForm";
import { user } from "../config/Userform";

import { Context } from "./Context/Context";

import { URL } from "../config/config";

import UserTable from "../config/UserTable";
import ClotheTable from "../config/ClotheTable";

function AdminPage() {
  const deleteDato = async (id) => {
    let data = await fetch(`${URL}/${actualPage}/${id}`, { method: "delete" });
    if (data.status === 204) alert(`${actualPage} eliminido`);
    setUpdate(false);
  };
  const editDato = (id) => {
    let form;
    if (actualPage === "clothe") {
      form = data.filter((opt) => opt.reference === id)[0];
      form.availability = form.availability ? "Si" : "No";
    } else {
      form = data.filter((opt) => opt.id === id)[0];
    }
    setMethod("update");
    setOpenModal(!openModal);
    //
  };
  const {
    userData,
    openModal,
    setOpenModal,
    method,
    setMethod,
    update,
    setUpdate,
  } = useContext(Context);
  const [data, setData] = useState([[]]);
  const pages = ["clothe", "user"];
  const form = { clothe, user };
  const tables = { user: UserTable, clothe: ClotheTable };
  let actualPage = userData.page || "clothe";
  let actualTable = tables[actualPage].formateData(data);
  useEffect(() => {
    const getOpts = async () => {
      let data = await fetch(`${URL}/${actualPage}/all`);
      data = await data.json();
      setData(data);
      setUpdate(true);
    };

    getOpts();
  }, [actualPage, update, setUpdate]);
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

            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
            >
              Nuevo
            </button>

            <Table
              headers={tables[actualPage].headers}
              content={actualTable}
              actions={[
                { name: "Editar", action: editDato, modal: "#Modal" },
                { name: "x", action: deleteDato },
              ]}
            />
          </div>
        </div>
      </div>

      <Modal title={actualPage}>
        <FormMain
          fields={form[actualPage].fields}
          action={form[actualPage].action[method]}
        />
      </Modal>
    </>
  );
}
export { AdminPage };
