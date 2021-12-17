import { createContext, useState } from "react";

const Context = createContext();
function ContextProvider({ children }) {
  const [userData, setUserData] = useState({ user: { type: "COORD" } });
  const [openModal, setOpenModal] = useState(false);
  const [method, setMethod] = useState("post");
  const [form, setFormData] = useState({});
  const [page, setPage] = useState("");
  const [update, setUpdate] = useState(true);
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        openModal,
        setOpenModal,
        method,
        setMethod,
        form,
        setFormData,
        page,
        setPage,
        update,
        setUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
