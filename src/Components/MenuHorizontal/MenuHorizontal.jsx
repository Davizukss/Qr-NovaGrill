import React from 'react';
import '../../Styles/MenuHorizontal.css';

import Pratos from "../../assets/template.png"; 
import Favoritos from "../../assets/template.png";
import Sobremesas from "../../assets/template.png";
import Bebidas from "../../assets/template.png";

export default function MenuHorizontal() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="menu-horizontal">
      <div 
        className="menu-item" 
        onClick={() => scrollToSection('pratos')}
      >
        <div className="image-container">
          <img src={Pratos} alt="Pratos" />
          <div className="title-overlay">Pratos</div>
        </div>
      </div>
      <div 
        className="menu-item" 
        onClick={() => scrollToSection('frango-assado')}
      >
        <div className="image-container">
          <img src={Favoritos} alt="Favoritos" />
          <div className="title-overlay">Favoritos</div>
        </div>
      </div>
      <div 
        className="menu-item" 
        onClick={() => scrollToSection('costela-bafo')}
      >
        <div className="image-container">
          <img src={Sobremesas} alt="Sobremesas" />
          <div className="title-overlay">Sobremesas</div>
        </div>
      </div>
      <div 
        className="menu-item" 
        onClick={() => scrollToSection('picanha-argentino')}
      >
        <div className="image-container">
          <img src={Bebidas} alt="Bebidas" />
          <div className="title-overlay">Bebidas</div>
        </div>
      </div>
    </div>
  );
}
