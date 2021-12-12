// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Header } from "./componets/Header";
import { NavBar } from "./componets/NavBar";
import { NavItem } from "./componets/NavItem";
import { FormMain } from "./componets/FormMain";
import { user } from "./config/Userform";
import { clothe } from "./config/ClotheForm";
import { order } from "./config/OrderForm";
import logo from "./logo.svg";

const company = "Alto tumerque LTDA";
function App() {
  const pages = ["user", "clothe", "order"];
  const [actualPage, setActualPage] = useState(pages[0]);

  const form = { clothe, user, order };
  //console.log(form);
  return (
    <>
      <Header company={company} logo={logo} />

      <div className="container-fluid">
        <div className="row">
          <NavBar>
            {pages.map((page) => (
              <NavItem
                text={page}
                key={page}
                state={actualPage}
                setActualPage={setActualPage}
              />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <FormMain
              fields={form[actualPage].fields}
              action={form[actualPage].action}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
