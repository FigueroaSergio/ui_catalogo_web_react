import { useContext } from "react";
import { CoordPage } from "./CoordPage";
import { LoginPage } from "./LoginPage";
import { AdminPage } from "./AdminPage";
import { AsesorPage } from "./AsesorPage";
import { Context } from "./Context/Context";

function Content() {
  const { userData, setUserData } = useContext(Context);
  if (userData.user == null) {
    return <LoginPage />;
  } else if (userData.user.type === "COORD") {
    return <CoordPage userData={userData} setUserData={setUserData} />;
  } else if (userData.user.type === "ADM") {
    return <AdminPage />;
  } else if (userData.user.type === "ASE") {
    return <AsesorPage />;
  }
}
export { Content };
