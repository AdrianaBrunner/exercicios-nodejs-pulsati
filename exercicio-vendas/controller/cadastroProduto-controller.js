const Produto = require('../model/cadastroProduto-model').Produto;
const {Sequelize, Op} = require('sequelize');

exports.createProduto = async (req, res) => {
    const { nomeProduto, marca, descricao, valor, quantidadeEstoque } = req.body;
    const produto = new Produto();
    produto.nomeProduto = nomeProduto;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.valor = valor;
    produto.quantidadeEstoque = quantidadeEstoque;
    await produto.save();
    res.json(produto);
}

exports.getProdutosComEstoque10 = async (req, res) => {
    const produtos = await Produto.findAll({ where: { quantidadeEstoque: {[Op.lt]: 10}}});
    res.json(produtos);
}