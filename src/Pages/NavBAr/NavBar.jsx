import { Link } from "react-router-dom";

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
                  <Link to="/about" className="link link-hover">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link link-hover">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="link link-hover">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/press-kit" className="link link-hover">
                    Press kit
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-xl normal-case btn btn-ghost">
              daisyUI
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <Link to="/products" className="link link-hover">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="link link-hover">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="link link-hover">Jobs</Link>
              </li>
              <li>
                <Link className="link link-hover">Press kit</Link>
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
