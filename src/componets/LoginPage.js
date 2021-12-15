import { login } from "../config/LoginForm";

import { FormMain } from "./FormMain";

function LoginPage() {
  return (
    <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
      <FormMain fields={login.fields} action={login.action} />
    </div>
  );
}
export { LoginPage };
