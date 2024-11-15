import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigate from './Routes/Navigate.jsx'; 
import './Styles/app.css'
function App() {
  return (
    <Router>
      <Navigate/>
    </Router>
  );
}

export default App;
