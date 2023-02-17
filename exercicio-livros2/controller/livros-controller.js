const Livros = require('../model/livros-model').Livros;

const Autores = require('../model/autores-model').Autores;
const Editoras = require('../model/editoras-model').Editoras;


exports.createLivros = async (req, res) => {
    const { titulo, numeroEdicao, anoLancamento, idAutor, idEditora } = req.body;
    const livros = new Livros();
    livros.titulo = titulo;
    livros.numeroEdicao = numeroEdicao;
    livros.anoLancamento = anoLancamento;
    livros.idAutor = idAutor;
    livros.idEditora = idEditora
    await livros.save();
    res.json(livros);
};

exports.getLivrosById = async (req, res) => {
    const codigo = req.params.codigo;
    const livros = await Livros.findByPk(codigo);
    res.json(livros);
};

exports.getAllLivros = async (req, res) => {
    const livros = await Livros.findAll();
    res.json(livros);
}

exports.updateLivros = async (req, res) => {
    const codigo = req.params.codigo;
    const livros = await Livros.findByPk(codigo);
    const { titulo, numeroEdicao, anoLancamento, idAutor, idEditora } = req.body;
    livros.titulo = titulo;
    livros.numeroEdicao = numeroEdicao;
    livros.anoLancamento = anoLancamento;
    livros.idAutor = idAutor;
    livros.idEditora = idEditora
    await livros.save();
    res.json(livros);
}

exports.deleteAutores = async (req, res) => {
    const codigo = req.params.codigo;
    const livros = await Livros.findByPk(codigo);
    await livros.destroy();
    res.json({ data: 'Usuario deletado com sucesso' });
}

exports.getLivrosComAutoreEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const livro = await Livros.findByPk(codigo)
    const codigoAutor = livro.idAutor;
    const autores = await Autores.findByPk(codigoAutor)
    const nomeAutor = autores.nomeAutor
    const sobrenomeAutor = autores.sobrenomeAutor
        res.json({livro,nomeAutor,sobrenomeAutor})
}

exports.deleteLivrosComAutoreEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const livro = await Livros.findByPk(codigo)
    .then(livro => {
        return livro.destroy();
    })
    .then(() => {
        // verificando se é necessário deletar a editora do livro
        Editoras.findByPk(idEditora)
            .then(editora => {
                editora.getLivros()
                    .then(livros => {
                        if (livros.length === 0) {
                            editora.destroy();
                        }
                    });
            });

        // verificando se é necessário deletar o autor do livro
        Autores.findByPk(autor_id)
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

}