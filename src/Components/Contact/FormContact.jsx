import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import Email from ""
function FormContact() {
  const form = useRef();

  // const sendEmail = (e) => {
    // e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_xlcoysq",
    //     "template_4rgtrch",
    //     form.current,
    //     "wRpotS0_FzWmho1hZ"
    //   )
    //   .then(
    //     (result) => {
    //       document.querySelectorAll("form > *").forEach((e) => (e.value = " "));
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // document.getElementById('contact-form').addEventListener('submit', function(event) {
      // event.preventDefault();
      // sendEmail();
  // });
  
  // function sendEmail() {
      // Email.send({
      //     Host: "smtp.smtpjs.com",
      //     Username: "<YOUR_SMTPJS_USERNAME>",
      //     Password: "<YOUR_SMTPJS_PASSWORD>",
      //     To: "<RECIPIENT_EMAIL>",
      //     From: document.getElementById('email').value,
      //     Subject: "Contact Form Submission",
          // Body: "Name: " + document.getElementById('name').value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById('message').value
      // }).then(
          // message => alert("Email sent successfully!")
      // );
  // }
    // const config ={
    //   Host : "smtp.elasticemail.com",
    //   Username : "saramohamaden1234@gmail.com",
    //   Password : "F78625D38B1F1322A6F7D79BF2AA96FFA6D7",
    //   Port:2525,
    //   To : 'them@website.com',
    //   From : "you@isp.com",
    //   Subject : "This is the subject",
    //   Body : "And this is the body"
    // }
  // };

  return (
    <form class=" w-4/5">
      
      <label for="" class="w-full block py-3 text-black font-semibold">Your Name</label>
      <input name="from_name" type="text" placeholder="Your Name" class="input input-bordered lg:w-1/2 w-[100%] max-w-xs"/> <label for="" class="w-full block py-3 text-black font-semibold">Your Email</label><input name="form_email" type="email" placeholder="Your Email" class="input input-bordered lg:w-1/2 w-[100%] max-w-xs"/><label for="" class="w-full block pt-7 text-black font-semibold">Your Message</label><textarea name="message" class="textarea w-full h-52 my-5" placeholder="Your Message"></textarea><button class="btn bg-darkblue-500 text-white font-semibold py-4 px-8 hover:bg-transparent hover:scale-[105%]" disabled>Send</button>
    <p style={{color:"red"}}>Form has an error at the moment, please contact with me on whatsapp, facebook or linkedIn</p>
    
    </form>
);
}
export default FormContact;
