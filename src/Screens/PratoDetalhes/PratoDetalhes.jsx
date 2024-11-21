import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pratosMock } from '../../Mocks/CardapioMocks.jsx/'

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
      <h1>{produto.nome}</h1>
      <img src={produto.imagem} alt={produto.nome} />
      <p>{produto.descricao}</p>
      <p><strong>Preço:</strong> {produto.preco}</p>
    </div>
  );
}
