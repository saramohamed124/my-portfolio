import "./navbar.css";
import header_img from "../Home/assets/imgs/header.svg";
import header_dark from "../Home/assets/imgs/header-dark.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const HandleColor = () => {
    document.querySelectorAll(".bg-purple-950").forEach((e) => {
      e.classList.remove("bg-purple-950");
      e.classList.add("bg-zinc-900");
    });

    document.querySelectorAll(".text-purple-800").forEach((e) => {
      e.classList.remove("text-purple-800");
      e.classList.add("text-green-700");
    });
    document.querySelectorAll(".bg-purple-600").forEach((e) => {
      e.classList.remove("bg-purple-600");
      e.classList.add("bg-green-700");
    });
    document.querySelectorAll(".bg-purple-700").forEach((e) => {
      e.classList.remove("bg-purple-700");
      e.classList.add("bg-zinc-900");
    });
    document.querySelector(".parent-header").firstChild.src = header_dark;
  };
  const HandleColorSun = () => {
    document.querySelectorAll(".text-green-700").forEach((e) => {
      e.classList.remove("text-green-700");
      e.classList.add("text-purple-800");
    });
    document.querySelectorAll(".bg-green-700").forEach((e) => {
      e.classList.remove("bg-green-700");
      e.classList.add("bg-purple-600");
    });
    document.querySelectorAll(".bg-green-700").forEach((e) => {
      e.classList.remove("bg-green-700");
      e.classList.add("bg-purple-900");
    });
    document.querySelectorAll(".bg-zinc-900").forEach((e) => {
      e.classList.remove("bg-zinc-900");
      e.classList.add("bg-purple-950");
    });
    document.querySelector(".parent-header").firstChild.src = header_img;
  };
  return (
    <div className="navbar   bg-purple-950 text-white fixed">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-600 rounded w-52"
          >
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="projects">Projects</Link>
            </li>
            <li className="font-semibold">
              <Link to="skills">Skills</Link>
            </li>
            <li className="font-semibold">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Sara Mohamed
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="project">Projects</Link>
          </li>
          <li className="font-semibold">
            <Link to="skills">Skills</Link>
          </li>
          <li className="font-semibold">
            <Link to="contact">Contact</Link>
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
                backgroundColor: "#3b0764",
              }}
            ></span>
            <span
              className=" block w-full h-2/4"
              style={{
                backgroundColor: "#9333ea",
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
