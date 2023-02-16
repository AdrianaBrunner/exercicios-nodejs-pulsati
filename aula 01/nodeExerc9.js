//• Crie um programa que leia um número do usuário e exiba a sua raiz quadrada.

const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline1.question("Informe o primero numero: ", (num1) => {
      console.log((`Resultado da raiz: ${Math.sqrt(num1)}`));
      readline1.close();
    });

  