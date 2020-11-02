import React from 'react'
import emailjs from 'emailjs-com';



export default function Contact (){
  
   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7s6yns7', 'template_bhvoxkd', e.target, 'user_CPQ3weaRVKbdeKbsXNFTW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  }

    return(
        <>
        <div className="contact-container">
            <h1>Let's Connect</h1>
            <div className="media">
                <div className="social">
                <h2>Other Ways To Connect</h2>
                <a target="_blank" href='https://github.com/Elisa-Alvarez'><img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png"/></a>
                <a target="_blank" href='https://www.linkedin.com/in/elisa-alvarez-full-stack-dev/'><img src="https://dwglogo.com/wp-content/uploads/2020/06/Linkedin_symbol_transparent.png"/></a>
                <a target="_blank" href='https://twitter.com/ElisaAl39167236'><img className="twitter" src="https://i.pinimg.com/originals/b7/91/26/b79126d537c628d7ac5429f7f84ffc8e.png"/></a>
                </div>
                <span/>
            <form onSubmit={sendEmail}>
                <label>Email Me</label>
               <input type="text" name="name" placeholder="Contact Name"className="full_name" />
               <input type="email" name='email'placeholder="Email" className="email"/>
               <input type="text" name='subject'placeholder="Subject" className="subject"/>
               <input type="text" name="message" placeholder="Message"  className="description" />
               <input type="submit" value="Send" />
            </form>
            </div>
        </div>
        </>
    )
}