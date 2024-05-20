import React from 'react';
import '../styles/pages/_contact.scss';
import ContactForm from '../components/ContactForm';


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
        <div className='RSLink'>
          <a href='https://github.com/tatiana-sthl' target="_blank" rel="noreferrer">Github</a><p>·</p>
          <a href='https://www.linkedin.com/in/tatiana-stahli/' target="_blank" rel="noreferrer">Linkedin</a><p>·</p>
          <a href='https://twitter.com/ThathiDev' target="_blank" rel="noreferrer">Twitter</a>
        </div>
        <div className='RSLinkMobile'>
          <ul>
            <li className='RSLinkMobileLi'>
              <a href='https://github.com/tatiana-sthl' target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className='RSLinkMobileLi'>
              <a href='https://twitter.com/ThathiDev' target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li className='RSLinkMobileLi'>
              <a href='https://www.linkedin.com/in/tatiana-stahli/' target="_blank" rel="noreferrer">Linkedin</a>
            </li>
          </ul>
        </div>
        
      </div>
      </>
    )
}

export default Contact;