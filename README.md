# API de Notificações do Welldome

Esta API fornece dados relacionados a notificações de COVID-19 em diferentes estados do Brasil. Ela segue o padrão REST e permite acessar informações sobre casos, mortes, estados e datas de notificação.

---


## Deploy

A Api está hospedada no Render (WelldomeAPI)[https://welldome-back-end.onrender.com]


---

## 🚀 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/RafaelSd0/Welldome_Back-end

2. Instale as dependencias
   ```bash
   npm install

3. Inicie o servidor
   ´´´bash
   node index.js
   
O servidor será iniciado em http://localhost:3000 por padrão 🚀🚀🚀🚀

---


## 📚 Endpoints


1. Listar todas as notificações
Descrição: Retorna todos os dados de notificações cadastrados.

- URL: /estados
- Metodo: GET

2. Buscar notificações por estado
Descrição: Filtra os dados de notificações de um estado específico.

- URL: /estados/:uf
- Metodo: GET

---


## 🛠 Estrutura do Projeto



- index.js        # Arquivo principal do servidor
- package.json    # Gerenciamento de dependências
- README.md       # Documentação do projeto

---


# ⚙️ Configurações do Servidor


`` 
const PORT = 3000;
``
``
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
``


## 🤝 Contribuições


Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork deste repositório.
2. Crie um branch para suas alterações:
   ```bash
   git checkout -b minha-nova-feature
3. Commit suas alterações:
   ```bash
   git commit -m "Adiciona minha nova feature"
4. Envie para o branch principal:
   ```bash
   git push origin minha-nova-feature
5. Abra um Pull Request

Obrigado pela sua contribuição 🚀🚀🚀🚀

---


# 📝 Licença


Este projeto está licenciado sob a Licença MIT.
