const salvarArquivo = require('./arquivo').salvarArquivo;
const lerArquivo = require('./arquivo').lerArquivo;
const Usuario = require('./usuario').Usuario;

console.log('Iniciando');

const promessas = [];

let usuario = new Usuario('adriano', 'flach');
promessas.push(salvarArquivo('adriano.txt', usuario.getNomeCompleto()));

usuario = new Usuario('jose', 'araujo');
promessas.push(salvarArquivo('jose.txt', usuario.getNomeCompleto()));

usuario = new Usuario('maria', 'aparecida');
promessas.push(salvarArquivo('maria.txt', usuario.getNomeCompleto()));

Promise.all(promessas).then(() => console.log('Usuários salvos com sucesso'));

console.log('Finalizado');