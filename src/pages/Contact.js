import React from 'react';
import '../styles/pages/_contact.scss';
import GithubIcon from '../icons/github-icon.svg';
import ContactForm from '../components/ContactForm';

/* TODO : 
    - créer un formulaire de contact
    - mettre des logos sur chacun des ronds
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
            <div>
              <h4 className='h4Contact'>Vous pouvez aussi me contacter par ici :</h4>
              <a href='https://github.com/tatiana-sthl' target="_blank" rel="noreferrer">Github</a>
            </div>
      </>
    )
}

export default Contact;