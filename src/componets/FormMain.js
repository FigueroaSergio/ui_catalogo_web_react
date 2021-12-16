import { useContext } from "react";
import { Context } from "./Context/Context";
import { FormItem } from "./FormItem";

function FormMain({ fields, action }) {
  const { userData, setUserData } = useContext(Context);
  const cancel = () => {
    setUserData({ ...userData, form: {}, method: "post" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = userData.form;
    // console.log(data);
    action(data, setUserData, userData).then((res) => {
      if (res)
        setUserData({ ...userData, form: {}, method: "post", update: false });
    });
  };
  return (
    <>
      <div className="col">
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
              <button onClick={cancel} className="btn btn-outline-dark ms-1">
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { FormMain };
