import { CoordPage } from "./CoordPage";
import { LoginPage } from "./LoginPage";
import { AdminPage } from "./AdminPage";
import { AsesorPage } from "./AsesorPage";

function Content({ userData, setUserData }) {
  //   console.log(userData);
  if (userData.user == null) {
    return <LoginPage setUserData={setUserData} />;
  } else if (userData.user.type === "COORD") {
    return <CoordPage userData={userData} setUserData={setUserData} />;
  } else if (userData.user.type === "ADM") {
    return <AdminPage userData={userData} setUserData={setUserData} />;
  } else if (userData.user.type === "ASE") {
    return <AsesorPage userData={userData} setUserData={setUserData} />;
  }
}
export { Content };
