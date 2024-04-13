import { atom } from "recoil";
// skills logo
import html_logo from "./assets/imgs/html_logo.png";
import css_logo from "./assets/imgs/css_logo.png";
import bootstrap_logo from "./assets/imgs/bootstrap_logo.png";
import tailwind_logo from "./assets/imgs/tailwind_logo.png";
import js_logo from "./assets/imgs/js_logo.png";
import typescript_logo from "./assets/imgs/typescript_logo.jpg";
import reactjs_logo from "./assets/imgs/reactjs_logo.png";
import redux_logo from './assets/imgs/redux.svg'

const skill = atom({
    key:"skill",
    default:[
        {
            id:0,
            name_skill:"HTML",
            src:html_logo
        },
        {
            id:1,
            name_skill:"CSS",
            src:css_logo
        },
        {
            id:2,
            name_skill:"Bootstrap",
            src:bootstrap_logo
        },
        {
            id:3,
            name_skill:"TailwindCss",
            src:tailwind_logo
        },
        {
            id:4,
            name_skill:"JavaScript",
            src:js_logo
        },
        {
            id:5,
            name_skill:"TypeScript",
            src:typescript_logo
        },
        {
            id:6,
            name_skill:"Reactjs",
            src:reactjs_logo
        },
        {
            id:7,
            name_skill:"Redux",
            src:redux_logo
        }
    ],
})
export default skill 