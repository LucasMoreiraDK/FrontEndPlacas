import React, { useState } from 'react';

const ConsultaCidade = () => {
  const [cidade, setCidade] = useState('');

  const handleInputChange = (event) => {
    setCidade(event.target.value);
  };

  const handleDownloadPDF = () => {
    // Crie a URL da API com a cidade inserida
    const apiUrl = `https://webiinodedeployapi.onrender.com/relatorio/cidade/${cidade}`;

    // Abra a URL em uma nova aba do navegador para fazer o download
    window.open(apiUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChange={handleInputChange}
      />
      <button onClick={handleDownloadPDF}>Baixar PDF</button>
    </div>
  );
};
 
export default ConsultaCidade;
