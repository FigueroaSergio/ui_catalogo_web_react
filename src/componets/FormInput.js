import { useContext } from "react";
import { Context } from "./Context/Context";
function FormInput({ name, type, required, opts }) {
  const { form, setFormData } = useContext(Context);

  let valInput = form[name] ? form[name] : "";

  const updateData = (e) => {
    setFormData({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(userData);
  };

  if (type !== "select") {
    return (
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={valInput}
        required={required}
        onChange={updateData}
      />
    );
  }
  if (type === "select")
    return (
      <select
        className="form-select"
        name={name}
        value={valInput}
        onChange={updateData}
        id={name}
        required={required}
      >
        <option value="" disabled>
          seleccionar
        </option>
        {opts.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
}
export { FormInput };
