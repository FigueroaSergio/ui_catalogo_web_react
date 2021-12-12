function Header({ company, logo }) {
  return (
    <>
      <header className="navbar bg-light navbar-light sticky-top  navbar-expand-lg  flex-md-nowrap p-0 shadow">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {company}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div> */}
      </header>
    </>
  );
}
export { Header };
