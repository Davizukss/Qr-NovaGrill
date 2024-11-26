import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const addMultipleDocuments = async () => {
  const batch = writeBatch(db);
  const pratosRef = collection(db, 'itens'); 

  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/qr-grill.firebasestorage.app/o/imagens-produtos';

  const pratosData = [
    { "codigo": 622, "nome": "1/2 CUPIM CASQUERADO", "descricao": "Meia porção de cupim com casquinha crocante, acompanhado de arroz, fritas e farofa.", "preco": 120.90, "categoria": "Pratos" },
    { "codigo": 626, "nome": "ANCHO P/1", "descricao": "Ancho grelhado no ponto perfeito, servido com arroz, fritas e farofa.", "preco": 84.90, "categoria": "Pratos" },
    { "codigo": 629, "nome": "ANCHO P/2", "descricao": "Ancho para duas pessoas, servido com arroz, fritas e farofa.", "preco": 172.90, "categoria": "Pratos" },
    { "codigo": 653, "nome": "BAIAO DE DOIS(GRANDE)", "descricao": "Baiao de dois grande.", "preco": 170.90, "categoria": "Pratos" },
    { "codigo": 663, "nome": "CARPACCIO", "descricao": "Carpaccio de carne", "preco": 58.90, "categoria": "Pratos" },
    { "codigo": 633, "nome": "CARRE CORDEIRO 450G", "descricao": "Carré de cordeiro de 450g, servido com arroz, fritas e farofa.", "preco": 130.90, "categoria": "Pratos" },
    { "codigo": 632, "nome": "CARRE CORDEIRO 900G", "descricao": "Carré de cordeiro de 900g, servido com arroz, fritas e farofa.", "preco": 240.90, "categoria": "Pratos" },
    { "codigo": 613, "nome": "CHAPA MISTA", "descricao": "Chapa com carnes mistas, servida com arroz, fritas e farofa.", "preco": 180.90, "categoria": "Pratos" },
    { "codigo": 610, "nome": "CHAPA NORDESTINA", "descricao": "Chapa com carnes variadas e legumes, servida com arroz, fritas e farofa.", "preco": 159.90, "categoria": "Pratos" },
    { "codigo": 620, "nome": "COSTELA CASQUEIRADA", "descricao": "Costela com casquinha crocante, acompanhada de arroz, fritas e farofa.", "preco": 198.90, "categoria": "Pratos" },
    { "codigo": 609, "nome": "COSTELINHA BARBECUE", "descricao": "Costelinha de porco ao molho barbecue, servida com arroz, fritas e farofa.", "preco": 155.90, "categoria": "Pratos" },
    { "codigo": 623, "nome": "COSTELINHA BARBECUE", "descricao": "Costelinha de porco ao molho barbecue, servida com arroz, fritas e farofa.", "preco": 175.90, "categoria": "Pratos" },
    { "codigo": 621, "nome": "CUPIM CASQUEIRADO", "descricao": "Cupim com casquinha crocante, servido com arroz, fritas e farofa.", "preco": 190.90, "categoria": "Pratos" },
    { "codigo": 1550, "nome": "FEIJOADA GRANDE SALAO", "descricao": "Feijoada completa, com carnes selecionadas, servida com arroz, fritas, farofa, bisteca, banana frita e couve.", "preco": 179.90, "categoria": "Pratos" },
    { "codigo": 1551, "nome": "FEIJOADA MEDIA SALAO", "descricao": "Feijoada de tamanho médio, acompanhada de arroz, fritas, farofa, bisteca, banana frita e couve.", "preco": 119.90, "categoria": "Pratos" },
    { "codigo": 1552, "nome": "FEIJOADA PEQUENA SALAO", "descricao": "Feijoada pequena, com arroz, fritas, farofa, bisteca, banana frita e couve.", "preco": 58.90, "categoria": "Pratos" },
    { "codigo": 611, "nome": "FILÉ MIGNON /CATUPIRY", "descricao": "Filé mignon com molho catupiry, servido com arroz, fritas e farofa.", "preco": 169.90, "categoria": "Pratos" },
    { "codigo": 612, "nome": "FILÉ MIGNON /GORGONZOLA", "descricao": "Filé mignon ao molho gorgonzola, servido com arroz, fritas e farofa.", "preco": 179.90, "categoria": "Pratos" },
    { "codigo": 657, "nome": "FRALDINHA NO RECHAUD", "descricao": "Fraldinha no rechaud, servida com arroz, fritas e farofa.", "preco": 220.90, "categoria": "Pratos" },
    { "codigo": 581, "nome": "FRANGO CRISPY", "descricao": "Frango empanado crocante, acompanhado de arroz e vinagrete.", "preco": 88.90, "categoria": "Pratos" },
    { "codigo": 580, "nome": "FRANGO PASSARINHO", "descricao": "Frango frito no estilo passarinho, servido com arroz e vinagrete.", "preco": 84.90, "categoria": "Pratos" },
    { "codigo": 667, "nome": "LASANHA", "descricao": "Lasanha tradicional, acompanhada de arroz", "preco": 64.90, "categoria": "Pratos" },
    { "codigo": 656, "nome": "MAMINHA NO RECHAUD", "descricao": "Maminha no rechaud, servida com arroz, farofa e fritas.", "preco": 220.90, "categoria": "Pratos" },
    { "codigo": 646, "nome": "MOQUECA DE PEIXE", "descricao": "Moqueca de peixe, servida com arroz.", "preco": 180.90, "categoria": "Pratos" },
    { "codigo": 668, "nome": "NHOQUE", "descricao": "Nhoque caseiro, servido com molho e arroz.", "preco": 64.90, "categoria": "Pratos" },
    { "codigo": 648, "nome": "PARMEGIANA DE CARNE (GRANDE)", "descricao": "Parmegiana de carne grande, acompanhada de arroz, fritas e farofa.", "preco": 210.90, "categoria": "Pratos" },
    { "codigo": 650, "nome": "PARMEGIANA DE FRANGO (GRANDE)", "descricao": "Parmegiana de frango grande, acompanhada de arroz, fritas e farofa.", "preco": 180.90, "categoria": "Pratos" },
    { "codigo": 630, "nome": "PICANHA C/MANDIOCA", "descricao": "Picanha com mandioca, servido com arroz.", "preco": 220.90, "categoria": "Pratos" },
    { "codigo": 631, "nome": "PICANHA CHAPA", "descricao": "Picanha na chapa, servida com arroz, fritas e farofa.", "preco": 188.90, "categoria": "Pratos" },
    { "codigo": 644, "nome": "SALMÃO AO MOLHO", "descricao": "Salmão grelhado, servido com arroz e legumes.", "preco": 120.90, "categoria": "Pratos" },
    { "codigo": 655, "nome": "PICANHA NO RECHAUD", "descricao": "Picanha no rechaud, servida com arroz, fritas e farofa.", "preco": 320.90, "categoria": "Pratos" },
    { "codigo": 625, "nome": "PRIME RIBS P/1", "descricao": "Prime ribs para uma pessoa, servida com arroz, fritas e farofa.", "preco": 86.90, "categoria": "Pratos" },
    { "codigo": 628, "nome": "PRIME RIBS P/2", "descricao": "Prime ribs para duas pessoas, servida com arroz, fritas e farofa.", "preco": 176.90, "categoria": "Pratos" },
    { "codigo": 661, "nome": "RISOTO DE AMARAO", "descricao": "Risoto de camarão, servido com arroz.", "preco": 76.90, "categoria": "Pratos" },
    { "codigo": 662, "nome": "RISOTO TRADICIONAL", "descricao": "Risoto tradicional, servido com arroz e legumes.", "preco": 72.90, "categoria": "Pratos" },
    { "codigo": 721, "nome": "SALMÃO 2 PESSOAS", "descricao": "Salmão para duas pessoas, servido com arroz e legumes.", "preco": 120.90, "categoria": "Pratos" },
    { "codigo": 722, "nome": "SALMÃO 3 PESSOAS", "descricao": "Salmão para três pessoas, servido com arroz e legumes.", "preco": 180.90, "categoria": "Pratos" },
    { "codigo": 624, "nome": "T BONE P/1", "descricao": "T-bone para uma pessoa, servido com arroz, fritas e farofa.", "preco": 88.90, "categoria": "Pratos" },
    { "codigo": 627, "nome": "T BONE P/2", "descricao": "T-bone para duas pessoas, servido com arroz, fritas e farofa.", "preco": 180.90, "categoria": "Pratos" },
    { "codigo": 670, "nome": "TALHARINI", "descricao": "Talharini com molho, servido com arroz.", "preco": 64.90, "categoria": "Pratos" },
    { "codigo": 647, "nome": "TILÁPIA INTEIRA", "descricao": "Tilápia inteira, servida com arroz, fritas e legumes.", "preco": 159.90, "categoria": "Pratos" },
    { "codigo": 674, "nome": "YAKISOBA", "descricao": "Yakissoba com legumes e carne, servido com arroz.", "preco": 69.90, "categoria": "Pratos" }
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
