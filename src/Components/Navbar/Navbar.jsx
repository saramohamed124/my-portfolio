import "./navbar.css";
import header_img from "../Home/assets/imgs/header.gif";
import header_dark from "../Home/assets/imgs/header-dark.gif";
import { Link } from "react-scroll";
function Navbar() {
  const HandleColor = () => {
    document.querySelectorAll(".bg-darkblue-500 ").forEach((e) => {
      e.classList.remove("bg-darkblue-500");
      e.classList.add("bg-zinc-900");
    });
    document.querySelectorAll(".bg-yellow-2000").forEach((e) => {
      e.classList.remove("bg-yellow-2000");
      e.classList.add("bg-green-700");
    }); 
    document.querySelectorAll(".text-yellow-500").forEach((e) => {
      e.classList.remove("text-yellow-500");
      e.classList.add("text-green-700");
    });
    document.querySelectorAll(".border-blue-950").forEach((e) => {
      e.classList.remove("border-blue-950");
      e.classList.add("border-zinc-900");
    });
    document.querySelectorAll(".text-zinc-500").forEach((e) => {
      e.classList.remove("text-zinc-500");
      e.classList.add("text-zinc-300");
    });
    document.querySelector(".parent-header").firstChild.src = header_dark;
  };
  const HandleColorSun = () => {
    document.querySelectorAll(".bg-zinc-900").forEach((e) => {
      e.classList.remove("bg-zinc-900");
      e.classList.add("bg-darkblue-500");
    });
    document.querySelectorAll(".bg-green-700").forEach((e) => {
      e.classList.remove("bg-green-700");
      e.classList.add("bg-yellow-2000");
    });
    document.querySelectorAll(".text-green-700").forEach((e) => {
      e.classList.remove("text-green-700");
      e.classList.add("text-yellow-500");
    });
    document.querySelectorAll(".border-zinc-900").forEach((e) => {
      e.classList.remove("border-zinc-900");
      e.classList.add("border-blue-950");
    });
    document.querySelectorAll(".text-zinc-300").forEach((e) => {
      e.classList.remove("text-zinc-300");
      e.classList.add("text-zinc-500");
    });
    document.querySelector(".parent-header").firstChild.src = header_img;
  };
  return (
    <div className="navbar   bg-darkblue-500  text-white fixed">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-2000 rounded w-52"
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
            className="swap-on fill-current w-7 h-7 overflow-hidden btn-circle"
            onClick={() => {
              HandleColor();
            }}
          >
            <span
              className=" block w-full h-2/4 "
              style={{
                backgroundColor: "#ffb703",
              }}
            ></span>
            <span
              className=" block w-full h-2/4"
              style={{
                backgroundColor: "#023047",
              }}
            ></span>
          </div>

          <div
            className="swap-off fill-current w-7 h-7 overflow-hidden btn-circle"
            onClick={() => {
              HandleColorSun();
            }}
          >
            <span className=" bg-gray-950 block w-full h-2/4"></span>
            <span className="bg-green-600 block w-full h-2/4"></span>
          </div>
        </label>
      </div>
    </div>
  );
}
export default Navbar;
