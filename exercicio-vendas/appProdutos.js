const {createProduto, getProdutosComEstoque10} = require('./controller/cadastroProduto-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/cadastroProduto', createProduto)
app.get('/produtosComEstoque10', getProdutosComEstoque10)

app.listen(3000, () => console.log('rodando'));