import { useState, useEffect, useContext } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { Table } from "./Table";
import { DetailOrder } from "./DetailOrder";
import { Modal } from "./Modal";

import { Context } from "./Context/Context";

import { URL } from "../config/config";
function formDate(date) {
  let ndate = new Date(date);
  let str =
    ndate.getDate() + "/" + (ndate.getMonth() + 1) + "/" + ndate.getFullYear();
  return str;
}
function CoordPage() {
  const normalizeData = (rawData) => {
    let data = [];

    if (rawData[0].length === 0) {
      return [[]];
    } else {
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
    }
    return data;
  };
  const viewDetails = (id) => {
    // console.log(id);
    let order = data.filter((order) => order.id === id)[0];
    // console.log(order);
    setDetail(order);
  };
  const { userData, setUserData } = useContext(Context);
  const pages = ["orders"];
  let actualPage = userData.page || "orders";
  const [data, setData] = useState([[]]);
  const [detail, setDetail] = useState([[]]);
  // console.log(userData);
  const headers = [
    "#",
    "Id.Cl",
    "Nombres",
    "Email",
    "Fecha",
    "Estado",
    "Acciones",
  ];

  let actualTable = normalizeData(data);

  let detailTable = detail;

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`${URL}/order/zona/${userData.user.zone}`);
      data = await data.json();
      // console.log("data");
      setData(data);

      setUserData({ ...userData, update: true });
    };
    getData();
  }, [userData.update, setUserData]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar userData={userData} setUserData={setUserData}>
            {pages.map((page) => (
              <NavItem text={page} key={page} state={actualPage} />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <h2>Ordernes</h2>
            <Table
              headers={headers}
              content={actualTable}
              actions={[
                { name: "Detalles", action: viewDetails, modal: "#Modal" },
              ]}
            />
            <Modal title="Detalles">
              <DetailOrder order={detailTable} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
export { CoordPage };
