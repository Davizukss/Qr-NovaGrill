import React from 'react';
import '../../Styles/Cardapio.css';
import { pratosMock } from '../../Mocks/CardapioMocks.jsx';

function Cardapio() {
  return (
    <div className="cardapio-container">
      <h2 id="Pratos">Pratos</h2>
      {pratosMock.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <button>Ver Mais</button>
          </div>
        </div>
      ))}
    <h2 id="Favoritos">Favoritos</h2>
      {pratosMock.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <button>Ver Mais</button>
          </div>
        </div>
      ))}
       <h2 id="Porcoes">Porções</h2>
      {pratosMock.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <button>Ver Mais</button>
          </div>
        </div>
      ))}
      <h2 id="Sobremesas">Sobremesas</h2>
      {pratosMock.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <button>Ver Mais</button>
          </div>
        </div>
      ))}
      <h2 id="Bebidas">Bebidas</h2>
      {pratosMock.map((prato) => (
        <div className="cardapio-item" key={prato.id} id={prato.id}>
          <div className="image-container">
            <img src={prato.imagem} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <div className="price">{prato.preco}</div>
            <button>Ver Mais</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;
