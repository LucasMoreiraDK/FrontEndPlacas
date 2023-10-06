import React from 'react';

class CadastrarPlaca extends React.Component {
  render() {
    return (
      <div>
        <h1>Upload de Placa</h1>
        <form action="https://webiinodedeployapi.onrender.com/cadastroPlaca" method="POST" encType="multipart/form-data">
          <input type="file" name="imagem" accept=".png" />
          <input type="text" name="cidade" placeholder="Nome da cidade" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default CadastrarPlaca;
