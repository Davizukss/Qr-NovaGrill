import React from 'react';
import '../../Styles/NavBar.css';

export default function Pesquisa({ searchOpen }) {
  return (
    <div className={`search-dropdown ${searchOpen ? 'open' : ''}`}>
      <input type="text" className="search-input" placeholder="Ex: T-BONE" />
    </div>
  );
}
