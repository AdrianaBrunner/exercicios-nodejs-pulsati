const { createEmpresa, getEmpresa, updateEmpresa, deleteEmpresa } = require('./controller/empresaAerea-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/empresa', createEmpresa);
app.get('/empresa/:codigo', getEmpresa);
app.put('/empresa/:codigo', updateEmpresa);
app.delete('/empresa/:codigo', deleteEmpresa);

app.listen(8000);