import React from 'react';
import '../styles/pages/_home.scss';
import Book from '../icons/book-icon.svg';

function Home() {
  return (
    <>
      <div>
        <h1>HELLO WORLD !</h1>
        <h2>Tatiana Stahli</h2>
        <h3>Développeuse web</h3>
        <h4>(et bien plus encore)</h4>
      </div>

      <div>
        <div>
          <h3>PROJETS</h3>
          <div>
            <img src={Book} alt='book-icon'/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;