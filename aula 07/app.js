const { createUsuario, getUsuario, updateUsuario, deleteUsuario } = require('./controller/usuario-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/usuarios', createUsuario);
app.get('/usuarios/:codigo', getUsuario);
app.put('/usuarios/:codigo', updateUsuario);
app.delete('/usuarios/:codigo', deleteUsuario);

app.listen(8000);