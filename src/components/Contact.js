import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3zxnl6f', 'template_nqq0z8t', form.current, '1uFynQhl1OEnbvBx7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <section className="contact-section">
            <h2 className="center-text">Contact Me</h2>
        
            <div className="wrapper">
                
                <p className="main-text center-text">Lets work together!</p>
                <form ref={form} onSubmit={sendEmail} className="form-control flex-column center">
                    <input type="text" placeholder="Full Name" name='user_name' required/>
                    <input type="emali" placeholder="Email" name='user_email' required/>
                    <input type="text" placeholder="Subject" name='user_subject' required/>
                    <textarea name='message' cols='30' rows='10' required/>
                    <button className="button-style" type="submit">Send Mail</button>
               </form>
            </div> 
        </section>
    )

}

export default Contact