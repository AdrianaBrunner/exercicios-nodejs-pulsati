const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;

class Autores extends Model { }
Autores.init({
    idAutor: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeAutor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenomeAutor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_autores_nodejs',
    timestamps: false
});



exports.Autores = Autores;