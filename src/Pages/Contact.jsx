// import { Form } from "react-router-dom";
import Heading from "../Components/Contact/Heading";
// import Form from "../Components/Contact/FormContact";
import FormContact from "../Components/Contact/FormContact";

function Contact() {
  return (
    <div
      className="p-5 px-6 bg-purple-600 lg:block lg:text-start  flex flex-col justify-center items-center text-center "
      id="contact"
    >
      <Heading />
      <FormContact />
    </div>
  );
}
export default Contact;
