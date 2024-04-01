import React from 'react';
import '../styles/pages/_stack.scss';
import '../styles/components/_navbar.scss';

import HtmlIcon from '../icons/icons8-html-5.svg';




function Stack() {
    return (
      <>
      <div className='stackTitle'>
        <h1>Stack</h1>
      </div>
      <div className='divStack'>
        <div className='iconContainer'>
          <img src={HtmlIcon} alt="HTML Icon" />
          <span>HTML</span>
        </div>
        
        
        <span>CSS</span>
        <span>JS</span>
        <span>React</span>
        <span>PHP</span>
        <span>MongoDB</span>
        <br></br>
        <span>Bootstrap</span>
        <span>VSC</span>
        <span>Figma</span>
        <span>Postman</span>
        <span>Wordpress</span>

    </div>
      </>
    )
}

export default Stack;