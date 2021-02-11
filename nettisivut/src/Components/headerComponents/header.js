import React from 'react';
import { Link }  from 'react-router-dom';

function Header() {
  return (
   <header>
       <h1>
        Ryhmä 1
       </h1>
        <nav>
            <ul>
                <li className="first">
                <Link to="/">Etusivu</Link>
                </li>
                <li>
                <Link to="/Data">Data</Link>
                </li>
                {/* <img className="logo" scr='./src/Lamppu_logo.jpg' alt='logo'/> */}
            </ul>
        </nav>
      
   </header>
  );
}

export default Header;
