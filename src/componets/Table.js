import { RowTable } from "./RowTable";
import { useEffect } from "react";
function Table({ userData, setUserData }) {
  //   console.log(userData);
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userData).map((key, index) => (
              <RowTable
                key={key}
                id={key}
                userData={userData}
                setUserData={setUserData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export { Table };
