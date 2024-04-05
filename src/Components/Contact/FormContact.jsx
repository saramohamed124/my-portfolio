import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
function FormContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xlcoysq",
        "template_4rgtrch",
        form.current,
        "wRpotS0_FzWmho1hZ"
      )
      .then(
        (result) => {
          document.querySelectorAll("form > *").forEach((e) => (e.value = " "));
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form className=" w-4/5" ref={form} onSubmit={sendEmail}>
      <label htmlFor="" className="w-full block py-3 text-black font-semibold">
        Your Name
      </label>
      <input
        name="from_name"
        type="text"
        placeholder="Your Name"
        className="input input-bordered lg:w-1/2 w-[100%] max-w-xs"
      />{" "}
      <label htmlFor="" className="w-full block py-3 text-black font-semibold">
        Your Email
      </label>
      <input
        name="form_email"
        type="email"
        placeholder="Your Email"
        className="input input-bordered lg:w-1/2 w-[100%] max-w-xs"
      />
      <label htmlFor="" className="w-full block pt-7 text-black font-semibold">
        Your Message
      </label>
      <textarea
        name="message"
        className="textarea w-full h-52 my-5"
        placeholder="Your Message"
      ></textarea>
      <button className="btn bg-darkblue-500 text-white font-semibold py-4 px-8 hover:bg-transparent hover:scale-[105%]">
        Send
      </button>
    </form>
  );
}
export default FormContact;
