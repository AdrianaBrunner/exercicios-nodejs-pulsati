const Usuario = require('../model/usuario').Usuario;

exports.createUsuario = async (req, res) => {
  const { nome, sobrenome } = req.body;
  const usuario = new Usuario();
  usuario.nome = nome;
  usuario.sobrenome = sobrenome;
  await usuario.save();
  res.json(usuario);
};

exports.getUsuario = async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  res.json(usuario);
};

exports.updateUsuario = async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  const { nome, sobrenome } = req.body;
  usuario.nome = nome;
  usuario.sobrenome = sobrenome;
  await usuario.save();
  res.json(usuario);
}

exports.deleteUsuario = async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  await usuario.destroy();
  res.json({ data: 'Usuario deletado com sucesso' });
}