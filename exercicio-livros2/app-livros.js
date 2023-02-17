const { createLivros, getLivrosById, getAllLivros, updateLivros, deleteAutores, getLivrosComAutoreEditora, deleteLivrosComAutoreEditora} = require('./controller/livros-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/livros', createLivros);
app.get('/livros/:codigo', getLivrosById);
app.get('/livros', getAllLivros);
app.get('/livrosComAutoreEditora/:codigo', getLivrosComAutoreEditora);
app.put('/livros/:codigo', updateLivros);
app.delete('/livros/:codigo', deleteAutores);
app.delete('/deletelivrosComAutoreEditora/:codigo', deleteLivrosComAutoreEditora)

app.listen(8000);