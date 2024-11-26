import React, { useState, useEffect, useRef } from "react";
import "../../Styles/MenuHorizontal.css";
import Pratos from "../../assets/Prato.png";
import Favoritos from "../../assets/Favoritos.png";
import Sobremesas from "../../assets/Sobremesas.png";
import Bebidas from "../../assets/Bebidas.png";
import Porcoes from "../../assets/Porcao.png";
import Executivos from "../../assets/Porcao.png";

const MenuHorizontal = () => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return (...args) => {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  useEffect(() => {
    const updateThreshold = () => {
      const referenceElement = document.getElementById("Pratos");
      if (referenceElement) {
        const rect = referenceElement.getBoundingClientRect();
        return rect.top + window.scrollY - window.innerHeight * 0.5;
      }
      return window.innerHeight * 0.1;
    };

    const handleScroll = throttle(() => {
      const threshold = updateThreshold();
      setIsSticky(window.scrollY >= threshold);
    }, 20);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - menuRef.current.offsetLeft);
    setScrollLeft(menuRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - menuRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do arraste
    menuRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - menuRef.current.offsetLeft);
    setScrollLeft(menuRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - menuRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    menuRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`menu-horizontal ${isSticky ? "sticky" : ""}`}
      ref={menuRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
      <div className="menu-item" onClick={() => scrollToSection("Executivos")}>
        <div className="image-container">
          <img src={Executivos} alt="Executivos" />
          <div className="title-overlay">Executivos</div>
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