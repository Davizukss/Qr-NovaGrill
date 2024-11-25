import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const addMultipleDocuments = async () => {
  const batch = writeBatch(db);
  const pratosRef = collection(db, 'itens'); 

  const pratosData = [
    { nome: "FEIJOADA GRANDE SALAO", descricao: "Feijoada completa, com carnes selecionadas, servida com arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 179.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FEIJOADA MEDIA SALAO", descricao: "Feijoada de tamanho médio, acompanhada de arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 119.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FEIJOADA PEQUENA SALAO", descricao: "Feijoada pequena, com arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 58.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FEIJOADA PEQUENA", descricao: "Feijoada pequena executiva, acompanhada de arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 56.90, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FEIJOADA MEDIA", descricao: "Feijoada média executiva, servida com arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 116.90, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FEIJOADA GRANDE", descricao: "Feijoada grande executiva, acompanhada de arroz, fritas, farofa, bisteca, banana frita e couve.", preco: 182.90, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO PICANHA", descricao: "Picanha suculenta, grelhada no ponto perfeito, servida com arroz, fritas, farofa e vinagrete.", preco: 52.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO CHURRASCO", descricao: "Churrasco variado, com carnes selecionadas, acompanhado de arroz, fritas, farofa e vinagrete.", preco: 35.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO CONTRA ACEBOLADO", descricao: "Contra filé acebolado, servido com arroz, fritas, farofa e vinagrete.", preco: 41.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO COSTELA", descricao: "Costela suculenta, assada lentamente, acompanhada de arroz, fritas, farofa e vinagrete.", preco: 41.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO CUPIM", descricao: "Cupim assado no ponto perfeito, servido com arroz, fritas, farofa e vinagrete.", preco: 41.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FILE DE FRANGO", descricao: "Filé de frango grelhado, acompanhado de arroz, fritas, farofa e vinagrete.", preco: 32.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FILÉ DE TILAPIA", descricao: "Filé de tilápia grelhado, acompanhado de arroz, fritas, farofa e vinagrete.", preco: 35.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO RABADA", descricao: "Rabada cozida lentamente, servida com arroz, fritas, farofa e vinagrete.", preco: 41.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO CARNE COM LEGUMES", descricao: "Carne com legumes ao molho, servida com arroz, fritas e farofa.", preco: 32.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO MIGNON A MILANESA", descricao: "Filé mignon à milanesa, acompanhado de arroz, fritas, farofa e vinagrete.", preco: 43.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO FILE DE FRANGO MILANESA", descricao: "Filé de frango à milanesa, acompanhado de arroz, fritas.", preco: 35.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO PARMEGIANA MIGNON", descricao: "Filé mignon à parmegiana, acompanhado de arroz, fritas.", preco: 52.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO PARMEGIANA FRANGO", descricao: "Frango à parmegiana, servido com arroz, fritas, farofa e vinagrete.", preco: 46.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO SALMAO", descricao: "Salmão grelhado, servido com arroz, fritas.", preco: 52.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO STROGONOFF DE MIGNON", descricao: "Strogonoff de filé mignon, servido com arroz e batata palha.", preco: 46.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO STROGONOFF DE FRANGO", descricao: "Strogonoff de frango, acompanhado de arroz e batata palha.", preco: 32.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO BAIAO DE DOIS", descricao: "Feijão verde, arroz e carne de sol, servido com queijo coalho.", preco: 43.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO LANCHE HAMBURGUER", descricao: "Hamburguer suculento, servido com batatas fritas.", preco: 45.99, categoria: "Executivos", imagemUrl: "url_da_imagem" },
    { nome: "FRANGO PASSARINHO", descricao: "Frango frito no estilo passarinho, servido com arroz e vinagrete.", preco: 84.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FRANGO CRISPY", descricao: "Frango empanado crocante, acompanhado de arroz e vinagrete.", preco: 88.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "COSTELINHA BARBECUE", descricao: "Costelinha de porco ao molho barbecue, servida com arroz, fritas e farofa.", preco: 155.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CHAPA NORDESTINA", descricao: "Chapa com carnes variadas e legumes, servida com arroz, fritas e farofa.", preco: 159.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FILÉ MIGNON /CATUPIRY", descricao: "Filé mignon com molho catupiry, servido com arroz, fritas e farofa.", preco: 169.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FILÉ MIGNON /GORGONZOLA", descricao: "Filé mignon ao molho gorgonzola, servido com arroz, fritas e farofa.", preco: 179.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CHAPA MISTA", descricao: "Chapa com carnes mistas, servida com arroz, fritas e farofa.", preco: 180.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "COSTELA CASQUEIRADA", descricao: "Costela com casquinha crocante, acompanhada de arroz, fritas e farofa.", preco: 198.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CUPIM CASQUEIRADO", descricao: "Cupim com casquinha crocante, servido com arroz, fritas e farofa.", preco: 190.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "1/2 CUPIM CASQUERADO", descricao: "Meia porção de cupim com casquinha crocante, acompanhado de arroz, fritas e farofa.", preco: 120.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "T BONE P/1", descricao: "T-bone grelhado no ponto perfeito, servido com arroz, fritas e farofa.", preco: 88.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PRIME RIBS P/1", descricao: "Prime ribs suculenta, assada no ponto ideal, servida com arroz, fritas e farofa.", preco: 86.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "ANCHO P/1", descricao: "Ancho grelhado no ponto perfeito, servido com arroz, fritas e farofa.", preco: 84.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "T BONE P/2", descricao: "T-bone para duas pessoas, servido com arroz, fritas e farofa.", preco: 180.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PRIME RIBS P/2", descricao: "Prime ribs para duas pessoas, servida com arroz, fritas e farofa.", preco: 176.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "ANCHO P/2", descricao: "Ancho para duas pessoas, servido com arroz, fritas e farofa.", preco: 172.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CARRE CORDEIRO 900G", descricao: "Carré de cordeiro de 900g, servido com arroz, fritas e farofa.", preco: 240.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CARRE CORDEIRO 450G", descricao: "Carré de cordeiro de 450g, servido com arroz, fritas e farofa.", preco: 130.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "SALMAO AO MOLHO(GRANDE)", descricao: "Salmão grande ao molho especial, acompanhado de arroz.", preco: 245.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "MOQUECA DE PEIXE", descricao: "Moqueca de peixe, servida com arroz.", preco: 180.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "TILAPIA INTEIRA", descricao: "Tilápia inteira frita, acompanhada de arroz.", preco: 159.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PARMEGIANA DE CARNE (GRANDE)", descricao: "Parmegiana de carne grande, acompanhada de arroz, fritas e farofa.", preco: 210.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PARMEGIANA DE FRANGO (GRANDE)", descricao: "Parmegiana de frango grande, acompanhada de arroz, fritas e farofa.", preco: 180.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "BAIAO DE DOIS(GRANDE)", descricao: "Baiao de dois grande.", preco: 170.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PICANHA NO RECHAUD", descricao: "Picanha no rechaud, servida com arroz, farofa e fritas.", preco: 320.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "MAMINHA NO RECHAUD", descricao: "Maminha no rechaud, servida com arroz, farofa e fritas.", preco: 220.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "FRALDINHA NO RECHAUD", descricao: "Fraldinha no rechaud, servida com arroz, fritas e farofa.", preco: 220.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "RISOTO DE CAMARAO", descricao: "Risoto de camarão.", preco: 76.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "RISOTO TRADICIONAL", descricao: "Risoto tradicional", preco: 72.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "CARPACCIO", descricao: "Carpaccio de carne", preco: 58.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "LASANHA", descricao: "Lasanha tradicional, acompanhada de arroz", preco: 64.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "NHOQUE", descricao: "Nhoque caseiro, servido com molho e arroz.", preco: 64.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "TALHARINI", descricao: "Talharini com molho de tomate", preco: 64.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "YAKISOBA", descricao: "Yakissoba com legumes e carne", preco: 69.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "SALMAO 2 PESSOAS", descricao: "Salmão grelhado para duas pessoas, servido com arroz.", preco: 120.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "SALMAO 3 PESSOAS", descricao: "Salmão grelhado para três pessoas, servido com arroz.", preco: 180.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PICANHA C/MANDIOCA ", descricao: "Picanha com mandioca, servido com arroz.", preco: 220.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "PICANHA CHAPA", descricao: "Picanha na chapa, servida com arroz, fritas e farofa.", preco: 172.90, categoria: "Pratos", imagemUrl: "url_da_imagem" },
    { nome: "EXECUTIVO LINGUICA ACEBOLADA", descricao: "Linguiça acebolada, servida com arroz, farofa e fritas.", preco: 32.99, categoria: "Executivos", imagemUrl: "url_da_imagem" }
  ];

  pratosData.forEach((prato) => {
    const docRef = doc(pratosRef); 
    batch.set(docRef, prato); 
  });

  try {
    await batch.commit();
    console.log('Itens adicionados com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar documentos: ', error);
  }
};

addMultipleDocuments();

export default addMultipleDocuments;
