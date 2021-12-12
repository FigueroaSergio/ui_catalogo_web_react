// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Header } from "./componets/Header";
import { Content } from "./componets/Content";
import logo from "./logo.svg";

const company = "Alto tumerque LTDA";
function App() {
  const [userData, setUserData] = useState({});

  return (
    <>
      <Header company={company} logo={logo} />
      <Content userData={userData} setUserData={setUserData} />
    </>
  );
}

export default App;
