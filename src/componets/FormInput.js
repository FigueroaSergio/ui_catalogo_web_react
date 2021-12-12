import { useEffect, useState } from "react";

function FormInput({ name, type, required, opts }) {
  let [data, setData] = useState([""]);
  useEffect(() => {
    // console.log(opts);
    if (type === "select" && typeof opts === "string") {
      fetch(opts)
        .then((res) => res.json())
        .then((res) => {
          //   console.log(data);
          let info = [];
          res.forEach((ele) => info.push(ele.reference));
          setData(info);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "select") {
      //   console.log(opts);
      setData(opts);
    }
  }, []);

  if (type !== "select") {
    return (
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        required={required}
      />
    );
  }
  if (type === "select")
    return (
      <select className="form-select" id={name}>
        {data.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
}
export { FormInput };
