const Autores = require('../model/autores-model').Autores;

exports.createAutores = async (req, res) => {
    const {nomeAutor, sobrenomeAutor, dataNascimento} = req.body;
    const autores = new Autores();
    autores.nomeAutor = nomeAutor;
    autores.sobrenomeAutor = sobrenomeAutor;
    autores.dataNascimento = dataNascimento;
    await autores.save();
    res.json(autores);
};

exports.getAutoresById = async (req, res) => {
    const codigo = req.params.codigo;
    const autores = await Autores.findByPk(codigo);
    res.json(autores);
};

exports.getAllAutores = async (req, res) => {
    const autores = await Autores.findAll();
    res.json(autores);
}

exports.updateAutores = async (req, res) => {
    const codigo = req.params.codigo;
    const autores = await Autores.findByPk(codigo);
    const {nomeAutor, sobrenomeAutor, dataNascimento} = req.body;
    autores.nomeAutor = nomeAutor;
    autores.sobrenomeAutor = sobrenomeAutor;
    autores.dataNascimento = dataNascimento;
    await autores.save();
    res.json(autores);
}

exports.deleteAutores = async (req, res) => {
    const codigo = req.params.codigo;
    const autores = await Autores.findByPk(codigo);
    await autores.destroy();
    res.json({ data: 'Usuario deletado com sucesso' });
}