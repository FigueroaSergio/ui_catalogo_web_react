import "./App.css";
import { ContextProvider } from "./componets/Context/Context";
import { AppUI } from "./componets/AppUI";

function App() {
  return (
    <>
      <ContextProvider>
        <AppUI />
      </ContextProvider>
    </>
  );
}

export default App;
