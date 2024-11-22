import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pratosMock } from '../../Mocks/CardapioMocks.jsx/';
import "../../Styles/PratoDetalhes.css";

export default function PratoDetalhes() {
  const { id } = useParams(); 
  const [produto, setProduto] = useState(null); 

  useEffect(() => {
    const pratoEncontrado = [
      ...pratosMock.pratos,
      ...pratosMock.favoritos,
      ...pratosMock.porcoes,
      ...pratosMock.sobremesas,
      ...pratosMock.bebidas,
    ].find((item) => item.id === id);  
    
    setProduto(pratoEncontrado);
  }, [id]);

  if (!produto) {
    return <div>Prato não encontrado</div>;
  }

  return (
    <div className="prato-detalhes">
      <div className="voltar-btn">
        <Link to="/Qr-NovaGrill/Cardapio">
          <i className="fas fa-arrow-left voltar-seta"></i>
        </Link> 
        <span className="voltar-text">Voltar</span>
      </div>

      <img src={produto.imagem} alt={produto.nome} className="prato-imagem" />
    <div className='card-prato'>
      <h1 className="prato-nome">{produto.nome}</h1>
      <p className="prato-descricao">{produto.descricao}</p>
      <p className="preco"><strong>Preço:</strong> {produto.preco}</p>
    </div>
    <div className='footer-produto'></div>
    </div>
  );
}
