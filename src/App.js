import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastrarPlaca from './components/CadastrarPlaca';
import ConsultaCidade from './components/ConsultaCidade';
import ConsultaPlaca from './components/ConsultaPlaca';
import Temperatura from './components/Temperatura';
import Luminosidade from './components/Luminosidade';
import Navbar from './components/Navbar'; // Importe o componente Navbar


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/cadastrar-placa" element={<CadastrarPlaca />} />
        <Route path="/consulta-cidade" element={<ConsultaCidade />} />
        <Route path="/consulta-placa" element={<ConsultaPlaca />} />
        <Route path="/Temperatura" element={<Temperatura />} />
        <Route path="/Luminosidade" element={<Luminosidade />} />
        
      </Routes>
    </Router>
  );
}

export default App;
