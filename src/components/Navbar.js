import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/_navbar.scss';


const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="../pages/Home.js">Home</Link>
          </li>
          <li>
            <Link to="../pages/Projects.js">Projets</Link>
          </li>
          <li>
            <Link to="../pages/Cv.js">Parcours</Link>
          </li>
          <li>
            <Link to="../pages/Stack.js">Stack</Link>
          </li>
          <li>
            <Link to="../pages/Contact.js">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
