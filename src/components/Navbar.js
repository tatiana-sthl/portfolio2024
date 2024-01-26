import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {/* Ajoutez d'autres liens ici */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
