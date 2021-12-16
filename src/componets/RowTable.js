function RowTable({ row, table_index, actions = [] }) {
  return row.length > 0 ? (
    <>
      <tr>
        {row.map((ele, index) => (
          <td key={`${table_index}-${index}`}>{ele}</td>
        ))}
        {actions.length > 0 ? (
          <td>
            {actions.map((action, index) => (
              <button
                className="btn btn-sm btn-outline-dark m-1"
                data-bs-toggle={action.modal ? "modal" : null}
                data-bs-target={action.modal ? action.modal : null}
                key={`action-${table_index}-${index}`}
                onClick={() => {
                  action.action(row[0]);
                }}
              >
                {action.name}
              </button>
            ))}
          </td>
        ) : null}
      </tr>
    </>
  ) : null;
}
export { RowTable };
