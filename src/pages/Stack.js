import React from 'react';
import '../styles/pages/_stack.scss';
import '../styles/components/_navbar.scss';

import HtmlIcon from '../icons/icons8-html.svg';
import CssIcon from '../icons/icons8-css.svg';
import JSIcon from '../icons/icons8-js.svg';
import ReactIcon from '../icons/icons8-react-96.png';
import PhpIcon from '../icons/icons8-php.svg';
import MongoDBIcon from '../icons/icons8-mongodb.png';
import BootstrapIcon from '../icons/icons8-bootstrap.svg';
import VscIcon from '../icons/icons8-code-studio-visuel-2019.svg';
import FigmaIcon from '../icons/icons8-figma.svg';
import PostmanIcon from '../icons/icons8-postman.png';
import WordpressIcon from '../icons/icons8-wordpress.svg';

/* TODO :
  - retravailler complètement le design de la page
*/

function Stack() {
    return (
      <>
      <div className='stackTitle'>
        <h1>Stack</h1>
      </div>
      <div className='divStack'>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={HtmlIcon} alt="HTML Icon" />
          <span className='iconText'>HTML</span>
        </div>
        <div className='iconContainer iconContainerStack '>
          <img className="imgIcon" src={CssIcon} alt="Css Icon" />
          <span className='iconText'>CSS</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={JSIcon} alt="Js Icon" />
          <span className='iconText'>JS</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={ReactIcon} alt="React Icon" />
          <span className='iconText'>React</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={PhpIcon} alt="Php Icon" />
          <span className='iconText'>PHP</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={MongoDBIcon} alt="MongoDB Icon" />
          <span className='iconText'>MongoDB</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={BootstrapIcon} alt="Bootstrap Icon" />
          <span className='iconText'>Bootstrap</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={VscIcon} alt="Vsc Icon" />
          <span className='iconText'>VSC</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={FigmaIcon} alt="Figma Icon" />
          <span className='iconText'>Figma</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={PostmanIcon} alt="Postman Icon" />
          <span className='iconText'>Postman</span>
        </div>
        <div className='iconContainer iconContainerStack'>
          <img className="imgIcon" src={WordpressIcon} alt="Wordpress Icon" />
          <span className='iconText'>Wordpress</span>
        </div>
    </div>
      </>
    )
}

export default Stack;