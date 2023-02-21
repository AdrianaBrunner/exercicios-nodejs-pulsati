const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db.js').getDbConfig;

class Produto extends Model { }
Produto.init({
    codigoProduto: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    quantidadeEstoque: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_produtos_nodejs',
    timestamps: false
});

exports.Produto = Produto;