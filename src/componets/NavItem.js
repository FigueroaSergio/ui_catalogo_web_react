function NavItem({ text, state, userData, setUserData }) {
  const chagePage = () => {
    let user = userData.user;
    setUserData({ user, page: text });
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
