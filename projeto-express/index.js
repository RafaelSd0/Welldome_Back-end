const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados fictícios para todos os estados
const estados = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 
  'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
];

const nomesEstados = {
  AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', AP: 'Amapá', BA: 'Bahia', CE: 'Ceará', 
  DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MG: 'Minas Gerais', 
  MS: 'Mato Grosso do Sul', MT: 'Mato Grosso', PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', 
  PI: 'Piauí', PR: 'Paraná', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RO: 'Rondônia', 
  RR: 'Roraima', RS: 'Rio Grande do Sul', SC: 'Santa Catarina', SE: 'Sergipe', SP: 'São Paulo', 
  TO: 'Tocantins'
};

const meses = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const ano = 2020;

let data = [];

estados.forEach(uf => {
  let casos = 10000; // Base inicial de casos
  let mortes = 200; // Base inicial de mortes

  meses.forEach(mes => {
    data.push({
      uf,
      nome: nomesEstados[uf],
      casos,
      mortes,
      doenca: 'Covid-19',
      data: `${mes}/${ano}`
    });

    // Incremento para próximos meses
    casos += Math.floor(Math.random() * 5000) + 1000; // Adiciona entre 1000 e 6000 casos
    mortes += Math.floor(Math.random() * 100) + 50;  // Adiciona entre 50 e 150 mortes
  });
});


// Rota para listar todos os estados
app.get('/estados', (req, res) => {
  res.json(data);
});

// Rota para buscar dados de um estado específico
app.get('/estados/:uf', (req, res) => {
  const uf = req.params.uf.toUpperCase();
  const estado = data.find((item) => item.uf === uf);

  if (estado) {
    res.json(estado);
  } else {
    res.status(404).json({ error: 'Estado não encontrado' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});