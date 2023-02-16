//• Crie um programa que leia uma lista de números do usuário e exiba a média desses números.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("Informe o primero numero: ", (num1) => {
  readline1.question("Informe o segundo numero: ", (num2) => {
    console.log((`Resultado da média: ${parseInt(num1) + parseInt(num2)/2}`));
    readline1.close();
  });
});

// OU

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  input: process.stdin,
  input: process.stdin,
  output: process.stdout,
});

let array = [];
let soma = 0;
let media = 0;

rl.question("Informe o primero numero: ", (num1) => {
  array.push(parseInt(num1));
  soma += parseInt(num1);
  rl.question("Informe o segundo numero: ", (num2) => {
    array.push(parseInt(num2));
    soma += parseInt(num2);
    rl.question("Informe o terceiro numero: ", (num3) => {
      array.push(parseInt(num3));
      soma += parseInt(num3);
      media = soma / 3;
      console.log(`A média dos números é ${media}`);
      rl.close();
    });
  });
});