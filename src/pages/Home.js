import React from 'react';
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
            <img src={Book} alt='book-icon'/>
          </div>
          <h3>PROJETS</h3>
        </div>
        <div className='linkBg'>
          <h3>PARCOURS</h3>
          <div>
            <img src={Parcours} alt='map-icon'/>
          </div>
        </div>
        <div className='linkBg'>
          <h3>STACK</h3>
          <div>
            <img src={Stack} alt='stack-icon'/>
          </div>
        </div>
        <div className='linkBg'>
          <h3>CONTACT</h3>
          <div>
            <img src={Contact} alt='contact-icon'/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;