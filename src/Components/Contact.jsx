import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sls0xqo', 'template_dfd9gnc', form.current, 'user_PWFPZtFaipFhdey6bIn3U')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occured, try again later. ");
      });

    e.target.reset();
  };

  return (
    <>
        <div id ="contact" className="contact">
        <div className="headers" >&lt;Contact/&gt;</div>
        <form className="center_form" ref={form} onSubmit={sendEmail} >

          <div className ="in" ><label style={{position: "relative", bottom: "-3px"}} >Name:</label>
            <input type="text" name="name"  style={{width: "25%",height: "35px",right: "2px",
    position: "relative" }} required/></div>
            
          <div className ="in"><label  style={{position: "relative", bottom: "-3px"}}>Email:</label>
            <input type="email" name="email" style={{width: "35%",height: "40px" }} required /></div>

          <div className ="in"><label style={{position: "relative", bottom: "45px"}} >Message:</label>
            <textarea name="message" style={{width: "55%",height: "100px",right: "35px",
    position: "relative"}} required/></div>

          <div > < input type="submit" value="Lets Connect" className="submit_button"/></div>

        </form>
        </div>
      



    </>

  );
};

