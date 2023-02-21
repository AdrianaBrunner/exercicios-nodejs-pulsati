const {createVendedor} = require('./controller/cadastroVendedor-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/cadastroVendedor', createVendedor)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})