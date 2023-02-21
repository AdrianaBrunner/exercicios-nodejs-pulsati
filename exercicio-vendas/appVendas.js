const {createVenda, getVendas} = require('./controller/cadastroVenda-controller')

const express = require('express');
const app = express();
app.use(express.json());

app.post('/cadastroVenda', createVenda)
app.get('/listarVendas', getVendas)

app.listen(3000, () => {
    console.log('Servidor rodando')
})