class Autor {
    constructor(nomeAutor, codigoAutor) {
        this.nomeAutor = nomeAutor;
        this.codigoAutor = codigoAutor;
    }

    getdadosAutor() {
        return `${this.nomeAutor} ${this.codigoAutor}`
        }
}

exports.Autor = Autor;