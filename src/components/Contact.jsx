import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  document.title = 'Contact';

  const form = useRef();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const handleTextareaChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 250) {
      setmessage(inputValue);
    }
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_nlnp8ba', 'template_ry9n02f', form.current, 'g1Qb9RKaWwJ3MQdxL')
      .then(() => {
          setname('');
          setemail('');
          setmessage('');
      }, (error) => {

      });
  };

  const handlechange = (event) => {
    if (event.target.id === "name") {
      setname(event.target.value);
    } else if (event.target.id === "email") {
      setemail(event.target.value);
    } else if (event.target.id === "message") {
      setmessage(event.target.value);
    }
  }

  return (
    <div className="Contact">
         <div className='heading'>
        <h4>
          Contact
        </h4> 
        <div className='underline'></div>
        <div className='content'>
          <div className='information'>
            <div className='phone'>
              <div className='icon'><i class="fa fa-mobile" aria-hidden="true"></i></div>
              <div className='heading'>+45 22207812</div>
              <div className='description'>Avaible on workdays</div>
            </div>            
            <div className='email'>
              <div className='icon'><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div className='heading'>Niclasschaeffer@gmail.com</div>
              <div className='description'>Send me an email, and lets talk</div>
            </div>
            <div className='city'>
              <div className='icon'><i class="fa fa-home" aria-hidden="true"></i></div>
              <div className='heading'>Roskilde, Denmark</div>
              <div className='description'>Specificly in trekroner</div>
            </div>

          </div>
          <div className='getting-in-touch'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='greeting'>
                Get in touch
              </div>
              <div className='underline'></div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  onChange={handlechange} 
                  placeholder='Enter your name' 
                  name="name" 
                  className="form-control" 
                  value={name} required />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  onChange={handlechange} 
                  placeholder='Enter your email' 
                  name="email" 
                  className="form-control" 
                  value={email} required />
              </div>
              <div className="form-group-message">
                <textarea 
                  id="message" 
                  onChange={handleTextareaChange} 
                  value={message} placeholder='Enter your message' 
                  name="message"
                  maxLength={250}>
                </textarea>
              </div>
              <div className="form-last">
                <div className='remaining'>
                  <p>{250 - message.length} characters remaining</p>
                </div>
                <button type="submit" className="Send">Send Message</button>
              </div>
            </form>
            <div className='MessageMe'>
              <div className='heading'>
                Message Me
              </div>
              <div className='underline'></div>
              <div className='content'>
              Wanna get in touch or talk about a project? 
              Feel free to contact me via email or drop a line in the form. 
              I endeavour to respond to all enquiries within 1 working day. 
              I look forward to hearing from you, whether it's for 
              collaboration or project idea.

              </div>
              <div className='links'>
                <ul className='icon-list-item'>
                  <li>
                    <a href="https://www.linkedin.com/in/niclas-juul-schaeffer/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li >
                    <a href="https://github.com/Niclasjuul96" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                  <a href="https://www.facebook.com/profile.php?id=1119953702" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;