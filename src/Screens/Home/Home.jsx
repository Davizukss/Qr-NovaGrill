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
        <h2>Cardápios Nova Grill</h2>
      <h3 className="card-text" >Acesse:</h3>
      </div>  
      <div className="button-container">
        <button onClick={handleNavigateToMenu} className="btn-cardapio">Nova Grill Freguesia do Ó</button>
      </div>
    </div>
  );
}

export default Home;
