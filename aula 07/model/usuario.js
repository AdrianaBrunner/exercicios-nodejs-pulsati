const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

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
  sequelize: dbConfig(),
  modelName: 'usuarios',
  timestamps: false
});

exports.Usuario = Usuario;