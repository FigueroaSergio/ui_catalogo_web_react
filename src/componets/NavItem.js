function NavItem({ text, state, setActualPage }) {
  const chagePage = () => {
    setActualPage(text);
  };
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${state == text && "active"}`}
        onClick={chagePage}
      >
        {text}
      </a>
    </li>
  );
}
export { NavItem };
