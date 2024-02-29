import React from 'react';
import '../styles/pages/_contact.scss';
import ContactIcon from '../icons/contact-icon.svg';
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
            <div className='contactForm'>
              <ContactForm />
            </div>
            <div className='contactMedia'>
                <ul className='contactUl'> 
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank' className='aContact two' href='https://github.com/tatiana-sthl'>
                          <img src={ContactIcon} alt='contact-icon'/>
                        </a>
                    </li>
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank'className='aContact three' href='https://www.linkedin.com/in/tatiana-stahli/'>
                          <img src={ContactIcon} alt='contact-icon'/>
                        </a>
                    </li>
                    <li className='contactLi'>
                        <a rel="noreferrer" target='_blank' className='aContact four' href='https://twitter.com/thathidev'>
                          <img src={ContactIcon} alt='contact-icon'/>
                        </a>
                    </li>
                </ul>

            </div>
      </>
    )
}

export default Contact;