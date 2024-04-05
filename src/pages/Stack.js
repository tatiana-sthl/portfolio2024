import React from 'react';
import '../styles/pages/_stack.scss';
import '../styles/components/_navbar.scss';

import HtmlIcon from '../icons/icons8-html-5.svg';
import CssIcon from '../icons/icons8-css.svg';
import JSIcon from '../icons/icons8-html-5.svg';
import ReactIcon from '../icons/icons8-html-5.svg';
import PhpIcon from '../icons/icons8-html-5.svg';
import MongoDBIcon from '../icons/icons8-html-5.svg';
import BootstrapIcon from '../icons/icons8-html-5.svg';
import VscIcon from '../icons/icons8-html-5.svg';
import FigmaIcon from '../icons/icons8-html-5.svg';
import PostmanIcon from '../icons/icons8-html-5.svg';
import WordpressIcon from '../icons/icons8-html-5.svg';


function Stack() {
    return (
      <>
      <div className='stackTitle'>
        <h1>Stack</h1>
      </div>
      <div className='divStack'>
        <div className='iconContainer'>
          <img className="imgIcon" src={HtmlIcon} alt="HTML Icon" />
          <span className='iconText'>HTML</span>
        </div>
        <div className='iconContainer'>
          <img className="imgIcon" src={CssIcon} alt="Css Icon" />
          <span className='iconText'>CSS</span>
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