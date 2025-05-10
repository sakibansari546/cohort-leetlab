import { Palette } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const MENU_ITEMS = ["Home", "About", "Contact"];
  const PROFILE_MENU = [];
  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-sm md:px-20 md:py-4">
          <div className="navbar-start">
            <Link
              to="/"
              className="btn btn-ghost btn-sm md:btn-md text-lg md:text-xl"
            >
              AlgoArena
            </Link>
          </div>

          <div className="navbar-end space-x-2">
            <div className="md:space-x-6 space-x-2 flex items-center justify-center">
              <Link
                to="/theme"
                className="btn btn-xs md:btn-md flex items-center justify-center"
              >
                <Palette size={18} />
                Theme
              </Link>
              <Link to="/" className="btn btn-primary btn-xs md:btn-md ">
                  Login
                </Link>
              {/* <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm md:btn-md btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                {MENU_ITEMS.map((item, idx) => (
                  <li key={idx}>
                    <Link>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
