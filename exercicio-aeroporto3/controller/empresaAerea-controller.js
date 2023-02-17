const EmpresaAerea = require('../model/empresaAerea').EmpresaAerea;

exports.createEmpresa = async (req, res) => {
  const { nomeEmpresa } = req.body;
  const empresa = new EmpresaAerea();
  empresa.nomeEmpresa = nomeEmpresa;
  await empresa.save();
  res.json(empresa);
};

exports.getEmpresa = async (req, res) => {
  const codigo = req.params.codigo;
  const empresa = await EmpresaAerea.findByPk(codigo);
  res.json(empresa);
};

exports.updateEmpresa = async (req, res) => {
  const codigo = req.params.codigo;
  const empresa = await EmpresaAerea.findByPk(codigo);
  const { nomeEmpresa } = req.body;
  empresa.nomeEmpresa = nomeEmpresa;
  await empresa.save();
  res.json(empresa);
}

exports.deleteEmpresa = async (req, res) => {
  const codigo = req.params.codigo;
  const empresa = await EmpresaAerea.findByPk(codigo);
  await empresa.destroy();
  res.json({ data: 'Usuario deletado com sucesso' });
}