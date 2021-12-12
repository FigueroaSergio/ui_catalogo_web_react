function NavItem({ text, state, setActualPage }) {
  const chagePage = () => {
    setActualPage(text);
  };
  return (
    <li className="nav-item">
      <p
        className={`nav-link ${state === text && "active"}`}
        onClick={chagePage}
      >
        {text}
      </p>
    </li>
  );
}
export { NavItem };
