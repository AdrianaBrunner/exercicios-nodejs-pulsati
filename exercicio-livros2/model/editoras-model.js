const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Editoras extends Model{}
Editoras.init({
    idEditora: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeEditora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_editoras_nodejs',
    timestamps: false
});

exports.Editoras = Editoras;