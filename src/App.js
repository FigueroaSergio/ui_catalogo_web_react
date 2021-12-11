// import logo from "./logo.svg";

import "./App.css";
import { Header } from "./componets/Header";
import { NavBar } from "./componets/NavBar";
import { NavItem } from "./componets/NavItem";
import { FormMain } from "./componets/FormMain";
import { FormtItem } from "./componets/FormItem";
import { user } from "./config/Userform";

import logo from "./logo.svg";

const company = "Alto tumerque LTDA";
function App() {
  const pages = ["user", "clothes", "orders"];
  const form = { user };
  console.log(form);
  return (
    <>
      <Header company={company} logo={logo} />

      <div className="container-fluid">
        <div className="row">
          <NavBar>
            {pages.map((page) => (
              <NavItem text={page} key={page} />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <FormMain>
              {Object.keys(form.user).map(function (key, index) {
                return (
                  <FormtItem
                    type={form.user[key].type}
                    name={key}
                    required={form.user[key].required}
                    key={index}
                    opts={form.user[key].opts}
                  />
                );
              })}
            </FormMain>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
