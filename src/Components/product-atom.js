import {atom} from 'recoil';
import quiz_app from "../Components/Projects/assets/imgs/quiz_app.png";
import specially_website from'../Components/Projects/assets/imgs/specially_website.jpg'
import multi_form from'../Components/Projects/assets/imgs/multi_form.webp'
import clipboard_landing from'../Components/Projects/assets/imgs/clipboard_landing.webp'

const productsState = atom({

  key: 'productsState', // unique ID (with respect to other atoms/selectors)

    default: [
      {
        id:1,
        name: "Quiz app",
        src: quiz_app,
        description: "This is HTML CSS Bootstrap JS Quiz App Vanilla JS",
        href:"https://saramohamed124.github.io/Quiz-App/"
      },
      {
        id:2,
        name: "Specially Design Website",
        src: specially_website,
        description: "This is HTML CSS Bootstrap JS Specially design Website",
        href:"https://saramohamed124.github.io/Specially_designTmplate-main/"
      }, {
        id:3,
        name: "Multi-step-form",
        src: multi_form,
        description: "This is HTML CSS Bootstrap JS Multi Step Form",
        href:"https://saramohamed124.github.io/Multi-step-form/"
      }, {
        id:4,
        name: "Clipboard landing page",
        src: clipboard_landing,
        description: "This is HTML CSS Bootstrap Clipboard landing page",
        href:"https://saramohamed124.github.io/Clipboard-landing-page/"
      }
    ], // default value (aka initial value)
  });

  export default productsState;