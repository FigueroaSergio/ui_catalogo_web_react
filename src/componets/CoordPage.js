import { useState } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

function CoordPage({ userData, setUserData }) {
  const pages = ["order"];
  const [actualPage, setActualPage] = useState("order");
  console.log(userData);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar userData={userData} setUserData={setUserData}>
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
            <h2>Work in progres</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export { CoordPage };
