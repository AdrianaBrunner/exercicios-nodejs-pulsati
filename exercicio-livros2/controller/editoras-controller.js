const Editoras = require('../model/editoras-model').Editoras;

exports.createEditoras = async (req, res) => {
  const { nomeEditora, cnpj } = req.body;
  const editoras = new Editoras();
  editoras.nomeEditora = nomeEditora;
  editoras.cnpj = cnpj;
  await editoras.save();
  res.json(editoras);
};

exports.getEditorasById = async (req, res) => {
  const codigo = req.params.codigo;
  const editoras = await Editoras.findByPk(codigo);
  res.json(editoras);
};

exports.getAllEditoras = async (req, res) => {
    const editoras = await Editoras.findAll();
    res.json(editoras);
  };

exports.updateEditoras = async (req, res) => {
  const codigo = req.params.codigo;
  const editoras = await Editoras.findByPk(codigo);
  const {nomeEditora, cnpj} = req.body;
  editoras.nomeEditora = nomeEditora;
  editoras.cnpj = cnpj;
  await editoras.save();
  res.json(editoras);
}

exports.deleteEditoras = async (req, res) => {
  const codigo = req.params.codigo;
  const editoras = await Editoras.findByPk(codigo);
  await editoras.destroy();
  res.json({ data: 'Usuario deletado com sucesso' });
}