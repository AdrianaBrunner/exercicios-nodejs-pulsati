class Livro {
    constructor(nomeLivro, codigoAutor, codigoLivro) {
        this.nomeLivro = nomeLivro;
        this.codigoAutor = codigoAutor;
        this.codigoLivro = codigoLivro;
    }

    getdadosLivro() {
        return `${this.nomeLivro} ${this.codigoAutor} ${this.codigoLivro}`
    }
}

exports.Livro = Livro;