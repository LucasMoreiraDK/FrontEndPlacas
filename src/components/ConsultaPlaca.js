import React, { useState } from 'react';

function ConsultaPlaca() {
  const [placa, setPlaca] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleInputChange = (e) => {
    setPlaca(e.target.value);
  };

  const consultarPlaca = () => {
    fetch(`https://webiinodedeployapi.onrender.com/consulta/${placa}`)
      .then((response) => response.json())
      .then((data) => {
        setResultado(data.message); // Acessa a propriedade 'message' da resposta JSON
      })
      .catch((error) => {
        console.error('Erro ao consultar placa:', error);
      });
  };

  return (
    <div>
      <h2>Consulta de Placa</h2>
      <input
        type="text"
        placeholder="Digite a placa do veículo"
        value={placa}
        onChange={handleInputChange}
      />
      <button onClick={consultarPlaca}>Consultar</button>
      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <p>{resultado}</p> {/* Exibe o texto da mensagem */}
        </div>
      )}
    </div>
  );
}

export default ConsultaPlaca;
