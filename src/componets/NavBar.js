import { useContext } from "react";
import { Context } from "./Context/Context";
function NavBar({ children }) {
  const { setUserData } = useContext(Context);
  const singout = () => {
    setUserData({ page: "", form: {} });
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

            <li className="nav-item">
              <p className="nav-link" onClick={singout}>
                Singout
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export { NavBar };
