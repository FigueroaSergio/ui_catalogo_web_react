import { createContext, useState } from "react";

const Context = createContext();
function ContextProvider({ children }) {
  const [userData, setUserData] = useState({
    form: {},
    page: "",
  });
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
