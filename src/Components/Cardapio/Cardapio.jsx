import React, { useEffect, useState, useRef } from 'react';
import '../../Styles/Cardapio.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../Api/firebaseConfig.jsx';
import { Link } from 'react-router-dom';
// import addMultipleDocuments from '../../Api/adicionarPratos.jsx'; 
const db = getFirestore(app);

function Cardapio() {

  //
  // const hasExecuted = useRef(false);

  // useEffect(() => {
  //   if (!hasExecuted.current) {
  //     addMultipleDocuments();
  //     hasExecuted.current = true;
  //   }
  // }, []);

  const [pratos, setPratos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [porcoes, setPorcoes] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [executivos, setExecutivos] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const pratosRef = collection(db, 'itens');
      const querySnapshot = await getDocs(pratosRef);
      
      const pratosData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id 
      }));

      setPratos(pratosData.filter(item => item.categoria === 'Pratos'));
      setFavoritos(pratosData.filter(item => item.categoria === 'Favoritos'));
      setExecutivos(pratosData.filter(item => item.categoria === 'Executivos')); 
      setPorcoes(pratosData.filter(item => item.categoria === 'Porções'));
      setSobremesas(pratosData.filter(item => item.categoria === 'Sobremesas'));
      setBebidas(pratosData.filter(item => item.categoria === 'Bebidas'));
    };

    fetchData();
  }, []);

 
  const formatarPreco = (preco) => {
    return preco ? parseFloat(preco).toFixed(2) : "0.00"; 
  };


  return (
    <div className="cardapio-container">
      <h2 id="Pratos">Pratos</h2>
      {pratos.length > 0 ? pratos.map((prato) => (
        <div className="cardapio-item" key={prato.id}>
          <div className="image-container">
            <img src={prato.imagemUrl} alt={prato.nome} />
          </div>
          <div className="text-content">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price">{`R$ ${formatarPreco(prato.preco)}`}</div>
            <Link to={`/produto/${prato.id}`} className="cardapio-header">
              <button><span>Ver Mais</span></button>
            </Link>
          </div>
        </div>
      )) : <p>Carregando Pratos...</p>}

      <h2 id="Executivos">Executivos</h2>
      {executivos.length > 0 ? executivos.map((prato) => (
        <div className="item-card" key={prato.id}>
          <div className="image-wrapper">
            <img src={prato.imagemUrl} alt={prato.nome} />
          </div>
          <div className="details">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price-tag">{`R$ ${formatarPreco(prato.preco)}`}</div>
            <Link to={`/produto/${prato.id}`}>
              <button><span>Ver Mais</span></button>
            </Link>
          </div>
        </div>
      )) : <p>Carregando Executivos...</p>}

      <h2 id="Porcoes">Porções</h2>
      {porcoes.length > 0 ? porcoes.map((prato) => (
        <div className="item-card" key={prato.id}>
          <div className="image-wrapper">
            <img src={prato.imagemUrl} alt={prato.nome} />
          </div>
          <div className="details">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price-tag">{`R$ ${formatarPreco(prato.preco)}`}</div>
          </div>
        </div>
      )) : <p>Carregando Porções...</p>}

      <h2 id="Sobremesas">Sobremesas</h2>
      {sobremesas.length > 0 ? sobremesas.map((prato) => (
        <div className="item-card" key={prato.id}>
          <div className="image-wrapper">
            <img src={prato.imagemUrl} alt={prato.nome} />
          </div>
          <div className="details">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <div className="price-tag">{`R$ ${formatarPreco(prato.preco)}`}</div>
          </div>
        </div>
      )) : <p>Carregando Sobremesas...</p>}

<h2 id="Bebidas">Bebidas</h2>
{bebidas.length > 0 ? bebidas.map((prato) => (
  <div className="item-card" key={prato.id}>
    <div className="image-wrapper">
      <img src={prato.imagemUrl} alt={prato.nome} />
    </div>
    <div className="details">
      <h3>{prato.nome}</h3>
      <p>{prato.descricao}</p>
      {(prato.nome.toUpperCase() != 'SUCOS' && prato.nome.toUpperCase() != 'BALDES PROMO') && (
      <div className="price-tag">{`${(prato.preco)}`}</div>
      )}
      {(prato.nome.toUpperCase() === 'SUCOS' || prato.nome.toUpperCase() === 'BALDES PROMO') && (
        <div>
        <div className="price-tag">{`A partir de R$ ${formatarPreco(prato.preco)}`}</div>
        <Link to={`/produto/${prato.id}`}>
          <button><span>Ver Mais</span></button>
        </Link>
        </div>
      )}
    </div>
  </div>
)) : <p>Carregando Bebidas...</p>}

    </div>
  );
}

export default Cardapio;
