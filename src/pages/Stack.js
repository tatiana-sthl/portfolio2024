import React from 'react';
import '../styles/pages/_stack.scss';
import '../styles/components/_navbar.scss';

import HtmlIcon from '../icons/icons8-html.svg';
import CssIcon from '../icons/icons8-css.svg';
import JSIcon from '../icons/icons8-js.svg';
import ReactIcon from '../icons/icons8-react-96.png';
import PhpIcon from '../icons/icons8-html.svg';
import MongoDBIcon from '../icons/icons8-html.svg';
import BootstrapIcon from '../icons/icons8-html.svg';
import VscIcon from '../icons/icons8-html.svg';
import FigmaIcon from '../icons/icons8-html.svg';
import PostmanIcon from '../icons/icons8-html.svg';
import WordpressIcon from '../icons/icons8-html.svg';


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
        <div className='iconContainer'>
          <img className="imgIcon" src={JSIcon} alt="Js Icon" />
          <span className='iconText'>JS</span>
        </div>
        <div className='iconContainer'>
          <img className="imgIcon" src={ReactIcon} alt="React Icon" />
          <span className='iconText'>React</span>
        </div>
        
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