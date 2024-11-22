import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoNovaGrill.png';
import "../../Styles/home.css"

function Home() {
  const navigate = useNavigate(); 

  const handleNavigateToMenu = () => {
    navigate('/Qr-NovaGrill/cardapio'); 
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo NovaGrill" className="logo" />
      <div className="card">
        <p className="card-text">Confira os nossos pratos deliciosos!</p>
      </div>  
      <div className="button-container">
        <button onClick={handleNavigateToMenu} className="btn-cardapio">Ver Cardápio</button>
      </div>
    </div>
  );
}

export default Home;
