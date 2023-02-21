const Venda = require('../model/cadastroVenda-model').Venda;
const Produto = require('../model/cadastroProduto-model').Produto;

exports.createVenda = async (req,res) => {
    const {codigoProduto, codigoVendedor, quantidadeVendida} = req.body;
    
    try {
        const estoque = await Produto.findOne({ where: {codigoProduto}})
        if(!estoque || estoque.quantidadeEstoque < quantidadeVendida) {
            return res.status(400).send('Produto não encontrado no estoque ou quantidade insuficiente');
        }
        await Venda.create({codigoProduto,codigoVendedor,quantidadeVendida})
        estoque.quantidadeEstoque -= quantidadeVendida;
        await estoque.save();
        res.send('venda realizada com sucesso');
    } catch (err) {
        console.error(err)
        res.status(500).send('Ocorreu um erro')
    }
}

exports.getVendas = async (req,res) => {
    const vendas = await Venda.findAll();
    res.json(vendas);
}
