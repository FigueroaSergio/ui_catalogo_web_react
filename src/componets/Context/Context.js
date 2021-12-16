import { createContext, useState } from "react";

const Context = createContext();
function ContextProvider({ children }) {
  const [userData, setUserData] = useState({
    user: { type: "COORD", zone: "ZONA 1" },
    form: {},
    page: "",
    method: "post",
    update: true,
  });
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
