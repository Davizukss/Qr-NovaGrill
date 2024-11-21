import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';

export default function Pesquisa({ searchOpen, pratosMock }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPratos, setFilteredPratos] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const allItems = [
      ...pratosMock.pratos,
      ...pratosMock.favoritos,
      ...pratosMock.porcoes,
      ...pratosMock.sobremesas,
      ...pratosMock.bebidas,
    ];

    const filtered = allItems.filter((item) =>
      item.nome.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredPratos(filtered);
  };

  return (
    <div>
      <div className={`search-dropdown ${searchOpen ? 'open' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Ex: T-BONE"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <ul className="search-results">
            {filteredPratos.length > 0 ? (
              filteredPratos.map((item) => (
                <li key={item.id} className="search-item">
                  <Link to={`/produto/${item.id}`} className="search-link">
                    <img src={item.imagem} alt={item.nome} />
                    <span>{item.nome}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="no-results">Nenhum prato encontrado</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
