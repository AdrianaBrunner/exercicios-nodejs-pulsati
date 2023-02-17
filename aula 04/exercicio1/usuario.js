class Usuario {
  nome;
  sobrenome;

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

exports.Usuario = Usuario;
