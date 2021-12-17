import { login } from "../config/LoginForm";

import { FormMain } from "./FormMain";
import { TableProductos } from "./TableProductos";
import { Modal } from "./Modal";

function LoginPage() {
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-dark mt-3"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      >
        Login
      </button>
      <TableProductos />
      <Modal title="login">
        <FormMain fields={login.fields} action={login.action} />
      </Modal>
    </div>
  );
}
export { LoginPage };
