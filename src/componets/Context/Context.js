import { createContext, useState } from "react";

const Context = createContext();
function ContextProvider({ children }) {
  const [userData, setUserData] = useState({
    user: { type: "ADM", zone: "ZONA 1" },
    form: {},
    page: "",
    method: "post",
    update: true,
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
