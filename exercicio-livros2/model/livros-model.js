const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig;
const Autores = require('../model/autores-model').Autores;

class Livros extends Model { }
Livros.init({
    idLivro: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroEdicao: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    anoLancamento: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    idAutor: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'adri_autores_nodejs',
            key: 'idAutor'
        }
    },
    idEditora: {
        type: DataTypes.NUMBER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'adri_editoras_nodejs',
            key: 'idEditora'
        }
    }
}, {
    sequelize: dbConfig(),
    modelName: 'adri_livros_nodejs',
    timestamps: false
});

exports.Livros = Livros;