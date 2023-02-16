const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'oracle',
  database: 'xe',
  username: 'system',
  password: 'pulsati2023',
  host: '192.168.0.50',
  port: 1521, // porta padrao do oracle​
  dialectOptions: { connectTimeout: 30000 }
});

const { Model, DataTypes } = require('sequelize');
class EmpresaAerea extends Model {}
EmpresaAerea.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nomeEmpresa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'adri_empresa_node',
  timestamps: false
});
sequelize.sync();

const express = require('express');
const app = express();
app.use(express.json());


app.post('/empresas-aereas', async (req, res) => {
    const { nomeEmpresa } = req.body;
    const empresa = new EmpresaAerea();
    empresa.nomeEmpresa = nomeEmpresa;
    await empresa.save();
    res.json(empresa)
});

app.get('/empresas-aereas/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const empresa = await EmpresaAerea.findByPk(codigo);
    res.json(empresa)
})

app.put('/empresas-aereas/:codigo', async (req, res) => {
    const codigo = req.params.codigo
    const empresa = await EmpresaAerea.findByPk(codigo);
    const {nomeEmpresa} = req.body;
    empresa.nomeEmpresa = nomeEmpresa;
    await empresa.save();
    res.json(empresa);
})

app.delete('/empresas-aereas/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const empresa = await EmpresaAerea.findByPk(codigo);
    await empresa.destroy();
    res.json({ data: 'Deletado com sucesso' });
})

app.listen(8080, console.log("Servidor OK"));