const { createAeroporto, getAeroporto, updateAeroporto, deleteAeroporto } = require('./controller/aeroporto-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/aeroporto', createAeroporto);
app.get('/aeroporto/:codigo', getAeroporto);
app.put('/aeroporto/:codigo', updateAeroporto);
app.delete('/aeroporto/:codigo', deleteAeroporto);

app.listen(8000);