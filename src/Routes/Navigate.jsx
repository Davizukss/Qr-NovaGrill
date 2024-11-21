import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Screens/Home/Home.jsx'; 
import Cardapio from '../Screens/TelaCardapio/TelaCardapio.jsx';
import NotFound from '../Screens/TelaNotFound/TelaNotFound.jsx';
import PratoDetalhes from '../Screens/PratoDetalhes/PratoDetalhes.jsx';
export default function Navigate() {
  return (
    <div>
      <Routes basename="/Qr-NovaGrill">
        <Route path="/" element={<Home />} />
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/produto/:id" element={<PratoDetalhes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
