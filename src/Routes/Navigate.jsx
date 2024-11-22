import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Screens/Home/Home.jsx'; 
import Cardapio from '../Screens/TelaCardapio/TelaCardapio.jsx';
import NotFound from '../Screens/TelaNotFound/TelaNotFound.jsx';
import PratoDetalhes from '../Screens/PratoDetalhes/PratoDetalhes.jsx';
export default function Navigate() {
  return (
    <div>
      <Routes>
        <Route path="/Qr-NovaGrill/" element={<Home />} />
        <Route path="Qr-NovaGrill/Cardapio" element={<Cardapio />} />
        <Route path="/produto/:id" element={<PratoDetalhes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
