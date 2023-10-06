import React, { useState } from 'react';
import axios from 'axios';

function ConsultaCidade() {
  const [cidade, setCidade] = useState(''); // Estado para armazenar a cidade digitada

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faz a solicitação à API com a cidade fornecida
      const response = await axios.get(`https://webiinodedeployapi.onrender.com/relatorio/cidade/${cidade}`);
      
      // Lida com a resposta da API (por exemplo, exibe os resultados)
      console.log(response.data);
    } catch (error) {
      // Lida com erros, como exibição de uma mensagem de erro
      console.error(error);
    }
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ConsultaCidade;
