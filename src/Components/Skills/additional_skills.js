import { atom } from "recoil";
// additional skills
import git_logo from "./assets/imgs/git_logo.png";
import github_logo from "./assets/imgs/github_logo.png";
import command_logo from "./assets/imgs/command_logo.png";
import dataStru_logo from "./assets/imgs/dataStruc_logo.png";
import algorithm_logo from "./assets/imgs/algoritms_logo.png";
import problem_logo from "./assets/imgs/problem_logo.png";

const add_skills = atom({
    key:"add_skills",
    default:[
        {
            id:0,
            name_skill:"Git",
            src:git_logo
        },
        {
            id:1,
            name_skill:"GitHub",
            src:github_logo
        },
        {
            id:2,
            name_skill:"Command Line",
            src:command_logo
        },
        {
            id:3,
            name_skill:"Data Structure",
            src:dataStru_logo
        },
        {
            id:4,
            name_skill:"Algorithms",
            src:algorithm_logo
        },
        {
            id:5,
            name_skill:"Problem solving",
            src:problem_logo
        }
    ],
})
export default add_skills