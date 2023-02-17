const express = require('express');
const router = express.Router();

const LivroController = require('./controllers/LivroController');

// Rota para buscar um livro e informações adicionais (nome do autor e nome da editora)
router.get('/livros/:id', LivroController.buscarLivro);

// Rota para deletar um livro, e também deletar editora e autor se forem os únicos associados ao livro
router.delete('/livros/:id', LivroController.deletarLivro);

module.exports = router;




const Livro = require('../models/Livro');
const Autor = require('../models/Autor');
const Editora = require('../models/Editora');

Livro.findByPk(id)
.then(livro => {
  return livro.destroy();
})
.then(() => {
  // verificando se é necessário deletar a editora do livro
  Editora.findByPk(editora_id)
  .then(editora => {
    editora.getLivros()
    .then(livros => {
      if (livros.length === 0) {
        editora.destroy();
      }
    });
  });

  // verificando se é necessário deletar o autor do livro
  Autor.findByPk(autor_id)
  .then(autor => {
    autor.getLivros()
    .then(livros => {
      if (livros.length === 0) {
        autor.destroy();
      }
    });
  });
})
.catch(err => {
  // aqui você trata o erro, se houver algum
});
