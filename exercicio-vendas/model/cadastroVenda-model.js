const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db.js').getDbConfig;

class Venda extends Model { }
Venda.init({
    idVenda: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigoProduto: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'adri_produtos_nodejs',
            key: 'codigoProduto',
        }
    },
    codigoVendedor: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'adri_vendedores_nodejs',
            key: 'codigoVendedor',
        }
    },
    quantidadeVendida: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_vendas_nodejs',
    timestamps: false
});

exports.Venda = Venda;