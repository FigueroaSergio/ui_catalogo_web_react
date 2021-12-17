import { useContext } from "react";
import { Context } from "./Context/Context";
import { FormItem } from "./FormItem";

function FormMain({ fields, action }) {
  const { form, setFormData, setUserData, userData, setUpdate } =
    useContext(Context);
  const cancel = () => {
    setFormData({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(data);
    action(form, setUserData, userData).then((res) => {
      if (res) {
        setFormData({});
        setUpdate(false);
      }
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
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-dark"
              >
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
