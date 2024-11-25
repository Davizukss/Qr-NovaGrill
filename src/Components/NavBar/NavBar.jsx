import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';
import logo from "../../assets/logoNovaGrill.png";
import Pesquisa from '../Pesquisa/Pesquisa';
import { pratosMock } from '../../mocks/CardapioMocks';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <Link to="/Qr-NovaGrill/Cardapio" className="navbar-logo">
          <img src={logo} alt="Logo NovaGrill" />
        </Link>

        <div className="search-icon">
          <button className="search-button" onClick={toggleSearch}>
            <i className={searchOpen ? "fas fa-times" : "fas fa-search"}></i>
          </button>
        </div>
      </div>

      <Pesquisa searchOpen={searchOpen} pratosMock={pratosMock} />

      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-menu">
        <button  onClick={toggleMenu}>×</button>
        </div>
          <div className='logo-menu'>
            <img src={logo} alt="NovaGrill" />
          </div>
        <ul>
          <li>
            <Link to="/Qr-NovaGrill" className="navbar-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/Qr-NovaGrill/Cardapio" className="navbar-link" onClick={toggleMenu}>Cardápio</Link>
          </li>
          <li>
            <a
              href="http://surl.li/wuzxhs"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Ifood
            </a>
          </li>
          <li>
            <a
              href="https://deliverydireto.com.br/novagrillfreguesia/novagrillfreguesia"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Delivery Direto
            </a>
          </li>
          <li className="navbar-contact">
            <a href="tel:+55113931-1776" className="navbar-link">
              <i className="fas fa-phone-alt"></i> 
              <span> (11) 3931-1776</span>
            </a>
          </li>
          <li className="navbar-contact-p">
            <a href="https://kub.sh/e919cd" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-pin maps"></i>
              <span> Rua Bartholomeu do Canto, 243, <br/> Vila Albertina, São Paulo - SP</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
