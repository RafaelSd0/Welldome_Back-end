API de Notificações de COVID-19
Esta API fornece dados relacionados a notificações de COVID-19 em diferentes estados do Brasil. Ela segue o padrão REST e permite acessar informações sobre casos, mortes, estados e datas de notificação.

🚀 Instalação
Clone este repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:
bash
Copiar código
cd seu-repositorio
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor:
bash
Copiar código
node index.js
O servidor será iniciado em http://localhost:3000 por padrão.

📚 Endpoints
1. Listar todas as notificações
Descrição: Retorna todos os dados de notificações cadastrados.

URL: /estados
Método: GET
Exemplo de Resposta:
json
Copiar código
[
  {
    "uf": "SP",
    "nome": "São Paulo",
    "casos": 20000,
    "mortes": 500,
    "data": "2024-11-01",
    "doenca": "Covid-19"
  },
  {
    "uf": "RJ",
    "nome": "Rio de Janeiro",
    "casos": 15000,
    "mortes": 300,
    "data": "2024-11-01",
    "doenca": "Covid-19"
  }
]
2. Buscar notificações por estado
Descrição: Filtra os dados de notificações de um estado específico.

URL: /estados/:uf
Método: GET
Parâmetro:
uf (obrigatório): Código do estado (exemplo: SP).
Exemplo de Requisição:
bash
Copiar código
GET /estados/SP
Exemplo de Resposta:
json
Copiar código
[
  {
    "uf": "SP",
    "nome": "São Paulo",
    "casos": 20000,
    "mortes": 500,
    "data": "2024-11-01",
    "doenca": "Covid-19"
  },
  {
    "uf": "SP",
    "nome": "São Paulo",
    "casos": 18000,
    "mortes": 400,
    "data": "2024-10-01",
    "doenca": "Covid-19"
  }
]
🛠 Estrutura do Projeto
bash
Copiar código
.
├── index.js        # Arquivo principal do servidor
├── package.json    # Gerenciamento de dependências
└── README.md       # Documentação do projeto
⚙️ Configurações do Servidor
Por padrão, a API é executada no localhost na porta 3000. Você pode alterar essa configuração no arquivo index.js:

javascript
Copiar código
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
🤝 Contribuições
Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

Faça um fork deste repositório.
Crie um branch para suas alterações:
bash
Copiar código
git checkout -b minha-nova-feature
Commit suas alterações:
bash
Copiar código
git commit -m "Adiciona minha nova feature"
Envie para o branch principal:
bash
Copiar código
git push origin minha-nova-feature
Abra um Pull Request.
📝 Licença
Este projeto está licenciado sob a Licença MIT.
