import React from "react";
import { FormInput } from "./FormInput";

function FormItem({ name, type, required, opts }) {
  // console.log(name, type, required, opts);

  return (
    <>
      <div className="row mb-2">
        <label htmlFor={name} className="col-sm-4 col-form-labe mb-2">
          {name}
        </label>
        <div className="col-sm-8">
          <FormInput name={name} type={type} required={required} opts={opts} />
        </div>
      </div>
    </>
  );
}

export { FormItem };
