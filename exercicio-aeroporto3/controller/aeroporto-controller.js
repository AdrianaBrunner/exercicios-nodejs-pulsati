const Aeroporto = require('../model/aeroporto').Aeroporto;

exports.createAeroporto = async (req, res) => {
  const { nome } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  await aeroporto.save();
  res.json(aeroporto);
};

exports.getAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
};

exports.updateAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome } = req.body;
  aeroporto.nome = nome;
  await aeroporto.save();
  res.json(aeroporto);
}

exports.deleteAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: 'Usuario deletado com sucesso' });
}