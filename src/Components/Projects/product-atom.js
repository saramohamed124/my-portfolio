import {atom} from 'recoil';
import furniro_app from "./assets/imgs/furniro_app.png"
import message_app from "./assets/imgs/Message_App.png"
import todo_list from "./assets/imgs/to_do_list.png"
import quiz_app from "./assets/imgs/quiz_app.png";
import specially_website from'./assets/imgs/specially_website.jpg'
import multi_form from'./assets/imgs/multi_form.webp'
import clipboard_landing from'./assets/imgs/clipboard_landing.webp'
import gold_app from './assets/imgs/gold_app.png'
import elearning_app from './assets/imgs/eleaning.png'

const productsState = atom({

  key: 'productsState', // unique ID (with respect to other atoms/selectors)

    default: [
      {
        id:0,
        name: "E Learning React App",
        src: elearning_app,
        description: "This is HTML CSS Material-UI reactjs axios Learning App",
        href:"https://elearning-app-green.vercel.app/"
      },{
        id:0,
        name: "Simple E commerce Gold React App",
        src: gold_app,
        description: "This is HTML CSS react-bootstrap reactjs redux toolkit",
        href:"https://saramohamed124.github.io/gold-app/"
      },
      {
        id:1,
        name: "Furniture E-commerce App",
        src: furniro_app,
        description: "This is HTML CSS TailwindCSS daisy Ui React.js E-commerce App",
        href:"https://saramohamed124.github.io/furniro-app/"
      }, {
        id:2,
        name: "Message-App",
        src: message_app,
        description: "This is HTML CSS Firebase React.js Message App",
        href:"https://saramohamed124.github.io/message-app/"
      }, {
        id:3,
        name: "To-Do_List App",
        src: todo_list,
        description: "This is HTML CSS Bootstrap Angular17 App",
        href:"https://saramohamed124.github.io/To-Do-List-App/"
      },
      {
        id:4,
        name: "Quiz app",
        src: quiz_app,
        description: "This is HTML CSS Bootstrap JS Quiz App Vanilla JS",
        href:"https://saramohamed124.github.io/Quiz-App/"
      },
      {
        id:5,
        name: "Specially Design Website",
        src: specially_website,
        description: "This is HTML CSS Bootstrap JS Specially design Website",
        href:"https://saramohamed124.github.io/Specially_designTmplate-main/"
      }, {
        id:6,
        name: "Multi-step-form",
        src: multi_form,
        description: "This is HTML CSS Bootstrap JS Multi Step Form",
        href:"https://saramohamed124.github.io/Multi-step-form/"
      }, {
        id:7,
        name: "Clipboard landing page",
        src: clipboard_landing,
        description: "This is HTML CSS Bootstrap Clipboard landing page",
        href:"https://saramohamed124.github.io/Clipboard-landing-page/"
      },
      
    ], // default value (aka initial value)
  });

  export default productsState;