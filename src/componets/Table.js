import { RowTable } from "./RowTable";

function Table({ headers, content = [[]], actions }) {
  //   console.log(userData);
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {headers.map((ele, index) => (
                <th key={`Header-${index}`}>{ele}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map((row, index) => (
              <RowTable
                key={index}
                row={row}
                table_index={index}
                actions={actions}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export { Table };
