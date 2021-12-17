import { useEffect, useState } from "react";
import { URL } from "../config/config";
import { Table } from "./Table";
import ClotheTable from "../config/ClotheTable";

function TableProductos() {
  const [data, setData] = useState([[]]);
  const [search, setSeach] = useState([[]]);
  const [form, setform] = useState({});
  const filter = (event) => {
    let text = event.target.value;
    let tg = event.target.name;
    setform({ ...form, [tg]: text });
  };
  const searchData = () => {
    let { description, price } = form;
    let products;
    description = description ? description : "";
    price = price ? price : "";
    // console.log(description, price);
    if (description.length > 0 && price.length > 0) {
      products = data.filter(
        (ele) =>
          ele.description.includes(description) || ele.price === parseInt(price)
      );
    } else if (description.length > 0) {
      products = data.filter((ele) => ele.description.includes(description));
    } else if (price.length > 0) {
      products = data.filter((ele) => ele.price === parseInt(price));
    } else {
      products = data;
    }

    setSeach(products);
  };
  useEffect(() => {
    const getOpts = async () => {
      let data = await fetch(`${URL}/clothe/all`);
      data = await data.json();
      setData(data);
      setSeach(data);
    };

    getOpts();
  }, []);
  return (
    <>
      <div className="row g-3 mt-1">
        <div className="col-sm-5 col-md-4">
          <div className="input-group ">
            <div className="input-group-text">Price</div>
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Price"
              name="price"
              onChange={filter}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="input-group">
            <div className="input-group-text">Description</div>
            <input
              type="text"
              className="form-control"
              placeholder="Filter by description"
              name="description"
              onChange={filter}
            />
          </div>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={searchData}
          >
            search
          </button>
        </div>
      </div>

      <Table
        headers={ClotheTable.headers}
        content={ClotheTable.formateData(search)}
      />
    </>
  );
}
export { TableProductos };
