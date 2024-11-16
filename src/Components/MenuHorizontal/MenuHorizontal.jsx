import React, { useState, useEffect } from "react";
import "../../Styles/MenuHorizontal.css";
import Pratos from "../../assets/Prato.png";
import Favoritos from "../../assets/feijoada.png";
import Sobremesas from "../../assets/Sobremesa.png";
import Bebidas from "../../assets/Bebidas.png";
import Porcoes from "../../assets/Porcao.png";

const MenuHorizontal = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - (isSticky ? 80 : 0),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`menu-horizontal ${isSticky ? "sticky" : ""}`}>
      <div className="menu-item" onClick={() => scrollToSection("Pratos")}>
        <div className="image-container">
          <img src={Pratos} alt="Pratos" />
          <div className="title-overlay">Pratos</div>
        </div>
      </div>
      <div className="menu-item" onClick={() => scrollToSection("Favoritos")}>
        <div className="image-container">
          <img src={Favoritos} alt="Favoritos" />
          <div className="title-overlay">Favoritos</div>
        </div>
      </div>
      <div className="menu-item" onClick={() => scrollToSection("Porcoes")}>
        <div className="image-container">
          <img src={Porcoes} alt="Porções" />
          <div className="title-overlay">Porções</div>
        </div>
      </div>
      <div className="menu-item" onClick={() => scrollToSection("Sobremesas")}>
        <div className="image-container">
          <img src={Sobremesas} alt="Sobremesas" />
          <div className="title-overlay">Sobremesas</div>
        </div>
      </div>
      <div className="menu-item" onClick={() => scrollToSection("Bebidas")}>
        <div className="image-container">
          <img src={Bebidas} alt="Bebidas" />
          <div className="title-overlay">Bebidas</div>
        </div>
      </div>
    </div>
  );
};

export default MenuHorizontal;
