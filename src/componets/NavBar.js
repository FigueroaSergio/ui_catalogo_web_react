import { useContext } from "react";
import { CardProfile } from "./CardProfile";
import { Context } from "./Context/Context";
import { Modal } from "./Modal";
function NavBar({ children }) {
  const { userData, setUserData } = useContext(Context);
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
            <li className="nav-item">
              <p
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#profile"
              >
                Perfil
              </p>
            </li>
            {children}

            <li className="nav-item">
              <p className="nav-link" onClick={singout}>
                Singout
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <Modal title="Perfil" id="profile">
        <CardProfile user={userData.user} />
      </Modal>
    </>
  );
}
export { NavBar };
