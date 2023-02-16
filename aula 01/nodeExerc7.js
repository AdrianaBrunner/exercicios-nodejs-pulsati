//• Crie um programa que verifique se um número fornecido pelo usuário é primo ou não.

let divisores = 0;

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.question('Digite um numero: ', numero => {
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores++;
    }
  }
  if (divisores == 2) console.log("É primo");
  else console.log("Não é primo");
  
  readLine.close();
});