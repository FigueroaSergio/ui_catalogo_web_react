import React from "react";

function FormItem({ name, type, required, opts }) {
  // console.log(name, type, required, opts);

  return (
    <>
      <div className="row mb-2">
        <label htmlFor={name} className="col-sm-4 col-form-labe mb-2">
          {name}
        </label>
        <div className="col-sm-8">
          {type === "select" ? (
            <select className="form-select" id={name}>
              {opts.map((opt) => (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              className="form-control"
              id={name}
              name={name}
              required={required}
            />
          )}
        </div>
      </div>
    </>
  );
}

export { FormItem };
