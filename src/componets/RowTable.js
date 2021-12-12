function RowTable({ id, userData, setUserData }) {
  const deleteElement = () => {
    console.log(id);
    delete userData[id];
    let newData = JSON.parse(JSON.stringify(userData));
    console.log(userData);
    if (Object.keys(userData).length == 0) setUserData({});
    else setUserData(newData);
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{userData[id]}</td>
        <td>
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={deleteElement}
          >
            x
          </button>
        </td>
      </tr>
    </>
  );
}
export { RowTable };
