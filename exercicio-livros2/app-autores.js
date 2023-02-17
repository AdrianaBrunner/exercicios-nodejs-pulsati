const {createAutores,getAutoresById,getAllAutores,updateAutores,deleteAutores} = require('./controller/autores-controller');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/autores', createAutores);
app.get('/autores', getAllAutores);
app.get('/autores/:codigo', getAutoresById);
app.put('/autores/:codigo', updateAutores);
app.delete('/autores/:codigo', deleteAutores);

app.listen(8000)