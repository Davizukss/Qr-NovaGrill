import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoNovaGrill.png';

function Home() {
  const navigate = useNavigate(); 

 
  const handleNavigateToMenu = () => {
    navigate('/cardapio'); 
  };

  return (
    <div>
      <img src={logo} alt="Logo NovaGrill" />
      <div className="card">
        <p>Confira os nossos pratos deliciosos!</p>
      </div>  
      <div>
        <button onClick={handleNavigateToMenu}>Ver Cardápio</button>
      </div>
    </div>
  );
}

export default Home;
