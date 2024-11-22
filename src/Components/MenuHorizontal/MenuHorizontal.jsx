import React, { useState, useEffect, useRef } from "react";
import "../../Styles/MenuHorizontal.css";
import Pratos from "../../assets/Prato.png";
import Favoritos from "../../assets/Favoritos.png";
import Sobremesas from "../../assets/Sobremesas.png";
import Bebidas from "../../assets/Bebidas.png";
import Porcoes from "../../assets/Porcao.png";

const MenuHorizontal = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (!isMobile) return;
    isDragging.current = true;
    startX.current = e.pageX - menuRef.current.offsetLeft;
    scrollLeft.current = menuRef.current.scrollLeft;
    menuRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - menuRef.current.offsetLeft;
    const walk = x - startX.current;
    menuRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isMobile) return;
    isDragging.current = false;
    menuRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - menuRef.current.offsetLeft;
    scrollLeft.current = menuRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !isMobile) return;
    const x = e.touches[0].pageX - menuRef.current.offsetLeft;
    const walk = x - startX.current;
    menuRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    isDragging.current = false;
  };

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
    <div
      className={`menu-horizontal ${isSticky ? "sticky" : ""}`}
      ref={menuRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
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
