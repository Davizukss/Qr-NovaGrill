import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../Api/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import "../../Styles/PratoDetalhes.css";

export default function PratoDetalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const produtoRef = doc(db, "itens", id);
        const produtoDoc = await getDoc(produtoRef);

        if (produtoDoc.exists()) {
          setProduto(produtoDoc.data());
        } else {
          console.log("Prato não encontrado!");
          setProduto(null);
        }
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!produto) {
    return <div>Prato não encontrado</div>;
  }

  const precoFormatado = produto.preco.toFixed(2);

  return (
    <div className="prato-detalhes">
      <div className="voltar-btn">
        <Link to="/Qr-NovaGrill/Cardapio">
          <i className="fas fa-arrow-left voltar-seta"></i>
        </Link>
        <span className="voltar-text">Voltar</span>
      </div>

      <img src={produto.imagemUrl} alt={produto.nome} className="prato-imagem" />
      <div className="card-prato">
        <h1 className="prato-nome">{produto.nome}</h1>
        <p className="prato-descricao">{produto.descricao}</p>
        <p className="preco">
          {produto.variacao ? `A partir de R$ ${precoFormatado}` : `R$ ${precoFormatado}`}
        </p>
        <p className="prato-variacao">
          <strong>Variação:{" "}
            {produto.variacao ? produto.variacao : "Sem variações disponíveis"}
          </strong>
        </p>
      </div>

      <div className="footer-produto"></div>
    </div>
  );
}
