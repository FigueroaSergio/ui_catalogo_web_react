import { useState, useEffect, useContext } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { Table } from "./Table";
import { DetailOrder } from "./DetailOrder";
import { Modal } from "./Modal";

import { Context } from "./Context/Context";

import { URL } from "../config/config";
import OrdersTable from "../config/OrdersTable";

function CoordPage() {
  const normalizeData = (rawData) => {
    // console.log(rawData);
    if (rawData.length === 0 || rawData[0].length === 0) {
      return [[]];
    } else {
      return OrdersTable.formateData(rawData);
    }
  };
  const viewDetails = (id) => {
    let order = data.filter((order) => order.id === id)[0];
    setDetail(order);
  };
  const { userData, setUserData, setUpdate, update } = useContext(Context);
  const pages = ["orders"];
  let actualPage = userData.page || "orders";
  const [data, setData] = useState([[]]);
  const [detail, setDetail] = useState([[]]);

  let actualTable = normalizeData(data);

  let detailTable = detail;

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`${URL}/order/zona/${userData.user.zone}`);
      data = await data.json();
      console.log(data);
      setData(data);
      setUpdate(true);
    };
    getData();
  }, [update, userData.user.zone, setUpdate]);
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
            <h2>Ordenes</h2>
            <Table
              headers={OrdersTable.headers}
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
