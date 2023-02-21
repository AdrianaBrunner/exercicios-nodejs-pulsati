
const Vendedor = require('../model/cadastroVendedor-model').Vendedor;

exports.createVendedor = async (req,res) => {
    const {nomeVendedor, cpf, telefone, endereco} = req.body;
    const vendedor = new Vendedor();
    vendedor.nomeVendedor = nomeVendedor;
    vendedor.cpf = cpf;
    vendedor.telefone = telefone;
    vendedor.endereco = endereco;
    await vendedor.save();
    res.json(vendedor);
}

