const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db.js').getDbConfig;

class Vendedor extends Model { }
Vendedor.init({
    codigoVendedor: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeVendedor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_vendedores_nodejs',
    timestamps: false
});

exports.Vendedor = Vendedor;