import html_logo from "./assets/imgs/html_logo.png";
import css_logo from "./assets/imgs/css_logo.png";
import bootstrap_logo from "./assets/imgs/bootstrap_logo.png";
import tailwind_logo from "./assets/imgs/tailwind_logo.png";
import js_logo from "./assets/imgs/js_logo.png";
import typescript_logo from "./assets/imgs/typescript_logo.jpg";
import reactjs_logo from "./assets/imgs/reactjs_logo.png";
// additional skills
import git_logo from "./assets/imgs/git_logo.png";
import github_logo from "./assets/imgs/github_logo.png";
import command_logo from "./assets/imgs/command_logo.png";
import dataStru_logo from "./assets/imgs/dataStruc_logo.png";
import algorithm_logo from "./assets/imgs/algoritms_logo.png";
import problem_logo from "./assets/imgs/problem_logo.png";
function Contents() {
  return (
    <div className="p-5 px-6 bg-purple-950">
      <h1 className="mt-6 text-white text-4xl">Skills</h1>
      <div className="my-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={html_logo} alt="html" />
          <p className="font-bold text-white">HTML</p>
        </div>
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={css_logo} alt="css" />
          <p className="font-bold text-white">CSS</p>
        </div>
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={bootstrap_logo} alt="bootstrap" />
          <p className="font-bold text-white">Bootstrap</p>
        </div>
        <div className="flex flex-col justify-around p-2 items-center gap-4">
          <img className=" w-36" src={tailwind_logo} alt="tailwindcss" />
          <p className="font-bold text-white">TailwindCss</p>
        </div>
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={js_logo} alt="javaScript" />
          <p className="font-bold text-white">JS</p>
        </div>
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={typescript_logo} alt="typeScript" />
          <p className="font-bold text-white">TS</p>
        </div>{" "}
        <div className="flex flex-col justify-around p-2 items-center gap-2">
          <img className="w-32" src={reactjs_logo} alt="Reactjs" />
          <p className="font-bold text-white">Reactjs</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold py-3 text-white">
        Additional skills
      </h2>

      <ul className="text-white my-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-16" src={git_logo} alt="Git" />
          Git
        </li>
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-14" src={github_logo} alt="Github" />
          Github
        </li>
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-16" src={command_logo} alt="Command line" />
          Command Line
        </li>
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-16" src={dataStru_logo} alt="Data Structure" />
          Data Structure
        </li>
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-16" src={algorithm_logo} alt="Algorithm" />
          Algorithms
        </li>
        <li className="flex justify-center gap-3 items-center flex-col py-5">
          <img className="w-16" src={problem_logo} alt="Problem solving" />
          Problem solving
        </li>
      </ul>
    </div>
  );
}
export default Contents;
