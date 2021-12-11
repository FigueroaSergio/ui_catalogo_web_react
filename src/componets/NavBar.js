import React from "react";
function NavBar(props) {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="  navbar col-md-3 col-lg-2 d-md-block navbar-light  bg-light sidebar collapse"
      >
        <div className="position-sticky">
          <ul className=" navbar-nav  flex-column">{props.children}</ul>
        </div>
      </nav>
    </>
  );
}
export { NavBar };
