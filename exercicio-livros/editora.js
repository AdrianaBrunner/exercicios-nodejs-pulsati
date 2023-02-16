class Editora {
    constructor(nomeEditora, codicoEditora, edicao) {
        this.nomeEditora = nomeEditora;
        this.codicoEditora = codicoEditora;
        this.edicao = edicao;
    }

    getdadosEditora() {
        return `${this.nomeEditora} ${this.codicoEditora} ${this.edicao}`;
    }
}

exports.Editora = Editora;