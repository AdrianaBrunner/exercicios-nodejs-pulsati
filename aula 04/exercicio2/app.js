const Usuario = require('./usuario').Usuario;
const salvarArquivo = require('./arquivo').salvarArquivo;


const salvarUsuarios = async () => {
  console.log('Iniciando');

  let usuario = new Usuario('adriano', 'flach');
  await salvarArquivo('usuario1.json', JSON.stringify(usuario));
  
  usuario = new Usuario('joao', 'oliveira');
  await salvarArquivo('usuario2.json', JSON.stringify(usuario));
  
  usuario = new Usuario('maria', 'benedita');
  await salvarArquivo('usuario3.json', JSON.stringify(usuario));

  console.log('Finalizado');
}

salvarUsuarios();
