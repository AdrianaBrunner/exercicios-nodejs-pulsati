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
class Usuario extends Model {}
Usuario.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'adri_usuarios_node',
  timestamps: false
});
sequelize.sync();

const express = require('express');
const app = express();
app.use(express.json());


app.post('/usuarios', async (req, res) => {
  const { nome, sobrenome } = req.body;
  const usuario = new Usuario();
  usuario.nome = nome;
  usuario.sobrenome = sobrenome;
  await usuario.save();
  res.json(usuario);
});
app.get('/usuarios/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  res.json(usuario);
})
app.put('/usuarios/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  const { nome, sobrenome } = req.body;
  usuario.nome = nome;
  usuario.sobrenome = sobrenome;
  await usuario.save();
  res.json(usuario);
});

app.delete('/usuarios/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  const usuario = await Usuario.findByPk(codigo);
  await usuario.delete();
  res.json({ data: 'Usuario deletado com sucesso' });
})
app.listen(8000);
