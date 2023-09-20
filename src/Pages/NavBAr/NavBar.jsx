import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/about"
                    className="link link-hover"
                    activeClassName="link-active"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="link link-hover"
                    activeClassName="link-active"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobs"
                    className="link link-hover"
                    activeClassName="link-active"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/press-kit"
                    className="link link-hover"
                    activeClassName="link-active"
                  >
                    Press kit
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="text-xl normal-case btn btn-ghost">
              daisyUI
            </NavLink>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <NavLink
                  to="/products"
                  className="link link-hover"
                  activeClassName="link-active"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="link link-hover"
                  activeClassName="link-active"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
