import React from 'react';
import '../styles/pages/_contact.scss';
import ContactForm from '../components/ContactForm';

/* TODO : 
    - faire le responsive
*/

function Contact() {
    return (
      <>
      <div className='contactTitle'>
                <h1>Contact</h1>
            </div>
            <div>
              <ContactForm />
            </div>
            <div className='contactRS'>
              <h4>Vous pouvez aussi me contacter par ici :</h4>
              <a href='https://github.com/tatiana-sthl' target="_blank" rel="noreferrer">Github</a><p>·</p>
              <a href='https://www.linkedin.com/in/tatiana-stahli/' target="_blank" rel="noreferrer">Linkedin</a><p>·</p>
              <a href='https://twitter.com/ThathiDev' target="_blank" rel="noreferrer">Twitter</a>
            </div>
      </>
    )
}

export default Contact;