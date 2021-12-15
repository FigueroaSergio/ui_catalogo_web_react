import logo from "../logo.svg";
import { Header } from "./Header";
import { Content } from "./Content";
const company = "Alto tumerque LTDA";
function AppUI() {
  return (
    <>
      <Header company={company} logo={logo} />
      <Content />
    </>
  );
}
export { AppUI };
