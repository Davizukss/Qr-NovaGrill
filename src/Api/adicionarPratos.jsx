import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const addMultipleDocuments = async () => {
  const batch = writeBatch(db);
  const pratosRef = collection(db, 'itens'); 

  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/qr-grill.firebasestorage.app/o/imagens-produtos';

  const pratosData = [
    { "codigo": 560, "nome": "MINI CAMARÃO EMPANADO", "descricao": "Camarões empanados crocantes, perfeitos para compartilhar.", "preco": 86.90, "categoria": "Porções" },
    { "codigo": 561, "nome": "MINI CAMARÃO ALHO E ÓLEO", "descricao": "Camarões salteados no alho e óleo, com sabor irresistível.", "preco": 68.90, "categoria": "Porções" },
    { "codigo": 562, "nome": "MINI LULA À DORÉ", "descricao": "Anéis de lula empanados e dourados, acompanhados de limão.", "preco": 48.90, "categoria": "Porções" },
    { "codigo": 563, "nome": "MINI ISCA DE PEIXE", "descricao": "Iscas de peixe empanadas, crocantes e saborosas.", "preco": 44.90, "categoria": "Porções" },
    { "codigo": 564, "nome": "MINI STEAK COM MUSSARELA", "descricao": "Mini steaks suculentos recheados com queijo mussarela derretido.", "preco": 44.90, "categoria": "Porções" },
    { "codigo": 565, "nome": "MINI PROVOLONE À MILANESA", "descricao": "Cubos de provolone empanados, com sabor marcante e crocância perfeita.", "preco": 42.90, "categoria": "Porções" },
    { "codigo": 566, "nome": "MINI ISCA DE FRANGO", "descricao": "Tirinhas de frango empanadas, temperadas e crocantes.", "preco": 40.90, "categoria": "Porções" },
    { "codigo": 567, "nome": "MINI CORAÇÃO", "descricao": "Corações de frango bem temperados, grelhados no ponto certo.", "preco": 38.90, "categoria": "Porções" },
    { "codigo": 568, "nome": "MINI TORRESMO", "descricao": "Torresminhos crocantes, com sabor de boteco autêntico.", "preco": 39.90, "categoria": "Porções" },
    { "codigo": 569, "nome": "MINI MANDIOCA FRITA", "descricao": "Cubinhos de mandioca frita, crocantes por fora e macios por dentro.", "preco": 38.90, "categoria": "Porções" },
    { "codigo": 570, "nome": "MINI POLENTA FRITA", "descricao": "Mini porção de polenta frita, dourada e deliciosa.", "preco": 38.90, "categoria": "Porções" },
    { "codigo": 571, "nome": "MINI BATATA FRITA", "descricao": "Porção de batatas fritas crocantes, clássica e deliciosa.", "preco": 29.90, "categoria": "Porções" },
    { "codigo": 572, "nome": "MINI PASTEL", "descricao": "Mini pastéis variados, recheados com sabor.", "preco": 42.90, "categoria": "Porções" },
    { "codigo": 577, "nome": "MINI FRITAS", "descricao": "Porção reduzida de batatas fritas, perfeita para petiscar.", "preco": 25.90, "categoria": "Porções" },
    { "codigo": 582, "nome": "ISCA DE FRANGO", "descricao": "Porção generosa de iscas de frango douradas e suculentas.", "preco": 86.90, "categoria": "Porções" },
    { "codigo": 583, "nome": "DADINHO DE TAPIOCA", "descricao": "Dadinho de tapioca crocante por fora e macio por dentro, acompanhado de molho especial.", "preco": 66.90, "categoria": "Porções" },
    { "codigo": 581, "nome": "BOLINHO DE COSTELA", "descricao": "Bolinho de costela com temperos especiais, perfeito para compartilhar.", "preco": 86.90, "categoria": "Porções" },
    { "codigo": 584, "nome": "TORRESMO ROLO 2 UND", "descricao": "Torresmo em rolo, super crocante e saboroso.", "preco": 88.90, "categoria": "Porções" },
    { "codigo": 585, "nome": "PASTEL 10 UND", "descricao": "Porção com 10 pastéis variados, recheados com sabores incríveis.", "preco": 94.90, "categoria": "Porções" },
    { "codigo": 586, "nome": "CAMARÃO ALHO E ÓLEO", "descricao": "Camarões salteados no alho e óleo, com tempero especial.", "preco": 155.90, "categoria": "Porções" },
    { "codigo": 587, "nome": "CAMARÃO EMPANADO", "descricao": "Camarões empanados, crocantes e saborosos, perfeitos para qualquer ocasião.", "preco": 170.90, "categoria": "Porções" },
    { "codigo": 588, "nome": "LULA À MILANESA", "descricao": "Anéis de lula empanados e dourados, acompanhados de limão.", "preco": 120.90, "categoria": "Porções" },
    { "codigo": 589, "nome": "ISCA DE PEIXE GRANDE", "descricao": "Porção generosa de iscas de peixe crocantes e bem temperadas.", "preco": 96.90, "categoria": "Porções" },
    { "codigo": 590, "nome": "BATATA COM CHEDDAR", "descricao": "Batatas fritas cobertas com cheddar cremoso e bacon crocante.", "preco": 86.90, "categoria": "Porções" },
    { "codigo": 592, "nome": "BATATA PALITO GRANDE", "descricao": "Porção grande de batata palito crocante, ideal para compartilhar.", "preco": 64.90, "categoria": "Porções" },
    { "codigo": 594, "nome": "POLENTA FRITA GRANDE", "descricao": "Porção grande de polenta frita, macia e crocante.", "preco": 68.90, "categoria": "Porções" },
    { "codigo": 596, "nome": "MANDIOCA FRITA GRANDE", "descricao": "Porção grande de mandioca frita, perfeita para acompanhar.", "preco": 68.90, "categoria": "Porções" },
    { "codigo": 598, "nome": "PROVOLONE À MILANESA", "descricao": "Porção generosa de provolone empanado, com sabor marcante.", "preco": 98.90, "categoria": "Porções" },
    { "codigo": 601, "nome": "BOLINHO DE CARNE SECA", "descricao": "Bolinho recheado com carne seca desfiada e temperos especiais.", "preco": 78.90, "categoria": "Porções" },
    { "codigo": 616, "nome": "CALABRESA ACEBOLADA", "descricao": "Porção de linguiça calabresa acebolada, com sabor defumado irresistível.", "preco": 140.90, "categoria": "Porções" },
    { "codigo": 614, "nome": "PICANHA APERITIVO", "descricao": "Cubos de picanha grelhados, perfeitos para petiscar com os amigos.", "preco": 178.90, "categoria": "Porções" }
  ];
  
  

  pratosData.forEach((prato) => {
    const docRef = doc(pratosRef); 
    const imagemUrl = `${baseUrl}%2F${prato.codigo}.png?alt=media`;
    batch.set(docRef, { ...prato, imagemUrl });
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
