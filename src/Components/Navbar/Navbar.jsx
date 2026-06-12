import "./navbar.css";
import header_img from "../Home/assets/imgs/header.gif";
import header_dark from "../Home/assets/imgs/header-dark.gif";
import { Link } from "react-scroll";

import Logo from "../../assets/logobg.jpeg";
function Navbar() {
const HandleColor = () => {
  document.documentElement.setAttribute("data-theme", "dark");

};

const HandleColorSun = () => {
  document.documentElement.removeAttribute("data-theme");  
};
  return (
    <div className="navbar bg-[var(--bg-color)] text-[var(--primary-color)] fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] text-[var(--bg-color)] p-2 shadow bg-[var(--primary-color)] rounded w-52"
          >
            <li className="font-semibold">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-68}
                duration={300}
              >
                Home
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-68}
                duration={300}
              >
                Projects
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={300}
              >
                Skills
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={300}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-68}
          duration={300}
          className="btn btn-ghost text-xl"
        >
         <img className="w-[30px]" src={Logo} alt="Sara Mohamed" />
          Sara Mohamed
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-68}
              duration={300}
            >
              Home
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-68}
              duration={300}
            >
              Projects
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-68}
              duration={300}
            >
              Skills
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-68}
              duration={300}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end swap swap-rotate place-content-end">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          <div
            className="swap-on fill-current w-7 h-7 overflow-hidden btn-circle border-2 border-[var(--primary-color)]"
            onClick={() => {
              HandleColor();
            }}
          >
            <span
              className=" block w-full h-2/4 "
              style={{
                backgroundColor: "#3d1217",
              }}
            ></span>
            <span
              className=" block w-full h-2/4"
              style={{
                backgroundColor: "#fdf0f1",
              }}
            ></span>
          </div>

          <div
            className="swap-off fill-current w-7 h-7 overflow-hidden btn-circle border-2 border-[var(--primary-color)]"
            onClick={() => {
              HandleColorSun();
            }}
          >
            <span className=" bg-[var(--primary-color)] block w-full h-2/4"></span>
            <span className="bg-[var(--bg-color)] block w-full h-2/4"></span>
          </div>
        </label>
      </div>
    </div>
  );
}
export default Navbar;
