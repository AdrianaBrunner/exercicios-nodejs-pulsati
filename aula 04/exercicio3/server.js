const http = require('http');
const Usuario = require('./usuario').Usuario;

http.createServer((req, res) => {
  if (req.method == 'POST') {
    if (req.url.indexOf('/usuario') >= 0) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        const usuario = JSON.parse(body);
        console.log(usuario);
        res.end("successfully submitted");
      });
    } else {
      res.end('Not found');
    }
  } else {
    res.end('Not found');
  }
}).listen(8000, () => console.log('Servidor inicializado na porta 8000'));