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
    res.json({ livro, nomeAutor, sobrenomeAutor })
}

exports.deleteLivrosComAutoreEditora = async (req, res) => {
    const codigo = req.params.codigo;
    const livro = await Livros.findByPk(codigo)
    const codigoAutor = livro.idAutor;
    const codigoEditora = livro.idEditora;
    const autores = await Autores.findByPk(codigoAutor)
    const editoras = await Editoras.findByPk(codigoEditora)
    const countAutores = await Autores.count()
    const countEditoras = await Editoras.count();

    if (countAutores == 1 && livro.idAutor == codigoAutor) {
        await livro.destroy();
        autores.destroy();

    }
    if (countEditoras == 1 && livro.idEditora == codigoEditora) {
        await livro.destroy();
        editoras.destroy();
    }
    
    res.json({ data: 'Livro deletado com sucesso' });
}