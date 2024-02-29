import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/_home.scss';
import Book from '../icons/book-icon.svg';
import Parcours from '../icons/map-icon.svg';
import Stack from '../icons/stack-icon.svg';
import Contact from '../icons/contact-icon.svg';


function Home() {
  return (
    <>
      <div className='presentation'>
        <h1>HELLO WORLD !</h1>
        <h2>Tatiana Stahli</h2>
        <h3>Développeuse web</h3>
        <h4>(et bien plus encore)</h4>
      </div>

      <div className='linkHome'>
        <div className='linkBg'>
          <div>
            <Link to="/projects">
              <img src={Book} alt='book-icon'/>
            </Link>
          </div>
          <h3>PROJETS</h3>
        </div>
        <div className='linkBg'>
          <h3>PARCOURS</h3>
          <div>
            <Link to="/cv">
              <img src={Parcours} alt='map-icon'/>
            </Link>
          </div>
        </div>
        <div className='linkBg'>
          <h3>STACK</h3>
          <div>
            <Link to="/stack">
              <img src={Stack} alt='stack-icon'/>
            </Link>
          </div>
        </div>
        <div className='linkBg'>
          <h3>CONTACT</h3>
          <div>
            <Link to="/contact">
              <img src={Contact} alt='contact-icon'/>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;