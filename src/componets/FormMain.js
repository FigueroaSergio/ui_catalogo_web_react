import React from "react";
import { FormItem } from "./FormItem";

function FormMain({ fields, action, userData, setUserData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    for (let key in fields) {
      let val = document.getElementById(key).value;
      // console.log(val.value, key);
      data[key] = val;
    }
    action(data, setUserData, userData);
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
                    key={key}
                    opts={fields[key].opts}
                  />
                );
              })}
              <button type="submit" className="btn btn-dark">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { FormMain };
