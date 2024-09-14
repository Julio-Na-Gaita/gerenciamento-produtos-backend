const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let produtos = [];

const cors = require('cors');
app.use(cors());

// Rota para adicionar um produto
app.post('/produtos', (req, res) => {
  const produto = req.body;
  produtos.push(produto);
  res.status(201).send('Produto adicionado com sucesso');
});

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Rota para atualizar um produto
app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  const novoProduto = req.body;
  produtos[id] = novoProduto;
  res.send('Produto atualizado com sucesso');
});

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Rota para deletar um produto
app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  produtos.splice(id, 1);
  res.send('Produto deletado com sucesso');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
