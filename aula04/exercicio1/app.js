const Usuario = require('./usuario').Usuario;
const salvarArquivo = require('./arquivo').salvarArquivo;
const lerArquivo = require('./arquivo').lerArquivo;

const usuario = new Usuario('adriano', 'flach');
const usuarioJson = JSON.stringify(usuario);
salvarArquivo('usuario.json', usuarioJson)
  .then(() => {
    lerArquivo('usuario.json')
      .then((texto) => console.log(JSON.parse(texto).nome));
  });
