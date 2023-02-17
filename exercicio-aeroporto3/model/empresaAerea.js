const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

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
  sequelize: dbConfig(),
  modelName: 'empresas',
  timestamps: false
});

exports.EmpresaAerea = EmpresaAerea;