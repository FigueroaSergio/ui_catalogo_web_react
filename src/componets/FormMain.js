import React from "react";
import { FormItem } from "./FormItem";

function FormMain({ fields, action }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    for (let key in fields) {
      let val = document.getElementById(key).value;
      // console.log(val.value, key);
      data[key] = val;
    }
    action(data);
  };
  return (
    <>
      <div className="col-md-8 col-lg-6">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {Object.keys(fields).map(function (key, index) {
                return (
                  <FormItem
                    type={fields[key].type}
                    name={key}
                    required={fields[key].required}
                    key={index}
                    opts={fields[key].opts}
                  />
                );
              })}
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { FormMain };
