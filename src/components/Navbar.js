// components/Navbar.js

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastrar-placa">Cadastrar Placa</Link>
        </li>
        <li>
          <Link to="/consulta-cidade">Consulta por Cidade</Link>
        </li>
        <li>
          <Link to="/consulta-placa">Consulta por Placa</Link>
        </li>
        <li>
          <Link to="/Temperatura">Consulta Temperatura</Link>
        </li>
        <li>
          <Link to="/Luminosidade">Consulta Luminosidade</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
