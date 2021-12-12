import React from "react";
function NavBar({ children, userData, setUserData }) {
  const singout = () => {
    setUserData({});
  };
  return (
    <>
      <nav
        id="sidebarMenu"
        className=" col-md-3 col-lg-2 d-md-block bg-light sidebar collapse "
      >
        <div className="position-sticky">
          <ul className=" navbar-nav  flex-column">
            {children}
            {userData.user ? (
              <li className="nav-item">
                <p className="nav-link" onClick={singout}>
                  Singout
                </p>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
}
export { NavBar };
