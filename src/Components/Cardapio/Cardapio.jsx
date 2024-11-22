import React from 'react';
import '../../Styles/Cardapio.css';
import { pratosMock } from '../../Mocks/CardapioMocks.jsx/';
import { Link } from 'react-router-dom';

function Cardapio() {
  return (
    <div className="cardapio-container">
      <h2 id="Pratos">Pratos</h2>
      {pratosMock.pratos.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <Link to={`/produto/${prato.id}`} className="cardapio-header">
              <button>Ver Mais</button>
            </Link>
          </div>
        </div>
      ))}

      <h2 id="Favoritos">Favoritos</h2>
      {pratosMock.favoritos.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
          <Link to={`/produto/${prato.id}`}>
            <button>Ver Mais</button>
          </Link>
          </div>
        </div>
      ))}

      <h2 id="Porcoes">Porções</h2>
      {pratosMock.porcoes.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
          <Link to={`/produto/${prato.id}`}>
            <button>Ver Mais</button>
          </Link>
          </div>
        </div>
      ))}

      <h2 id="Sobremesas">Sobremesas</h2>
      {pratosMock.sobremesas.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
          <Link to={`/produto/${prato.id}`}>
            <button>Ver Mais</button>
          </Link>
          </div>
        </div>
      ))}

      <h2 id="Bebidas">Bebidas</h2>
      {pratosMock.bebidas.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
          <Link to={`/produto/${prato.id}`}>
            <button>Ver Mais</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;
