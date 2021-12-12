import { useState } from "react";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { FormMain } from "./FormMain";

import { clothe } from "../config/ClotheForm";
import { user } from "../config/Userform";

function AdminPage({ userData, setUserData }) {
  const pages = ["clothe", "user"];
  let actualPage = userData.page || "clothe";
  const form = { clothe, user };

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
                setUserData={setUserData}
                userData={userData}
              />
            ))}
          </NavBar>
          <div className="mt-3 col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <FormMain
              fields={form[actualPage].fields}
              action={form[actualPage].action}
              setUserData={setUserData}
              userData={userData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export { AdminPage };
