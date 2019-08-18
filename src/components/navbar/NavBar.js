import React from 'react';
import "./navbar.scss";
export default function NavBar(){
  return(
    <nav className="nav">  
      <ul className="nav__container">  
        <li ><a href="/" className="nav-links">City Tour</a></li>  
        <li ><a href="/" className="nav-links">Home</a></li>  
        <li ><a href="/" className="nav-links">Tours</a></li>  
        <li ><a href="/" className="nav-links">Contact</a></li>  
        <li><a href="/" className="nav-links">About</a></li>  
      </ul>
    </nav>
  );
} 