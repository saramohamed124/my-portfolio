import "./navbar.css";
function Navbar() {
  const HandleColor = () => {
    document.querySelectorAll(".bg-purple-600").forEach((e) => {
      e.classList.add("bg-zinc-900");
    });

    document.querySelectorAll(".bg-purple-800").forEach((e) => {
      e.classList.add("bg-green-700");
    });
    document.querySelectorAll(".text-purple-800").forEach((e) => {
      e.classList.add("text-green-700");
    });
    document.querySelectorAll(".bg-purple-900").forEach((e) => {
      e.classList.add("bg-green-700");
    });
  };
  return (
    <div className="navbar   bg-purple-600 text-white fixed">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-800 rounded w-52"
          >
            <li className="font-semibold">
              <a>Home</a>
            </li>
            <li className="font-semibold">
              <a>Projects</a>
            </li>
            <li className="font-semibold">
              <a>Skills</a>
            </li>
            <li className="font-semibold">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Sara Mohamed</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <a>Home</a>
          </li>
          <li className="font-semibold">
            <a>Projects</a>
          </li>
          <li className="font-semibold">
            <a>Skills</a>
          </li>
          <li className="font-semibold">
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <button
          id="dark-theme"
          className="theme border-2 transation duration-[0.3s] ease-in border-white border-1 overflow-hidden w-7 h-7 btn-circle opacity-85 cursor-pointer hover:rotate-[100deg]"
          onClick={() => {
            HandleColor();
          }}
        >
          <span className=" bg-gray-950 block w-full h-2/4"></span>
          <span className="bg-green-600 block w-full h-2/4"></span>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
