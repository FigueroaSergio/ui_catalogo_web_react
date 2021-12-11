function FormtItem({ name, type, required, opts }) {
  console.log(name, type, required, opts);

  return (
    <>
      <div className="row mb-2">
        <label htmlFor={name} className="col-sm-2 col-form-labe">
          {name}
        </label>
        <div className="col-sm-6">
          {type === "select" ? (
            <select className="form-select">
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
              required={required}
            />
          )}
        </div>
      </div>
    </>
  );
}

export { FormtItem };
