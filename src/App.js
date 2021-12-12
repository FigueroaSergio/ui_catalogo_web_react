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
import { login } from "./config/LoginForm";
import logo from "./logo.svg";

const company = "Alto tumerque LTDA";
function App() {
  const pages = ["user", "clothe", "order", "login"];
  const [actualPage, setActualPage] = useState(pages[0]);
  const [userData, setUserData] = useState({});

  const form = { clothe, user, order, login };
  //console.log(form);
  console.log(userData);
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
              handleData={setUserData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
