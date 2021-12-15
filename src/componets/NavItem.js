import { useContext } from "react";
import { Context } from "./Context/Context";

function NavItem({ text, state }) {
  const { userData, setUserData } = useContext(Context);
  const chagePage = () => {
    let user = userData.user;
    setUserData({ user, form: {}, page: text });
  };
  return (
    <li className="nav-item">
      <p
        className={`nav-link ${state === text && "active"}`}
        onClick={chagePage}
      >
        {text}
      </p>
    </li>
  );
}
export { NavItem };
