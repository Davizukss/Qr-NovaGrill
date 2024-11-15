import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';
import logo from "../../assets/logoNovaGrill.png";
import Pesquisa from '../Pesquisa/Pesquisa';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <Link to="/Cardapio" className="navbar-logo">
          <img src={logo} alt="Logo NovaGrill" />
        </Link>

        <div className="search-icon">
          <button className="search-button" onClick={toggleSearch}>
            <i className={searchOpen ? "fas fa-times" : "fas fa-search"}></i>
          </button>
        </div>
      </div>

      <Pesquisa searchOpen={searchOpen} />

      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>×</button>
        <ul>
          <li>
            <Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/Cardapio" className="navbar-link" onClick={toggleMenu}>Cardápio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
