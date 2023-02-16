//• Crie um programa que leia uma lista de números do usuário e exiba a mediana desses números.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const acharMediana = (numeros) => {
  numeros.sort((a, b) => a - b);
  if (numeros.length % 2 === 0) {
    const mid = numeros.length / 2;
    return (numeros[mid - 1] + numeros[mid]) / 2;
  } else {
    return numeros[Math.floor(numeros.length / 2)];
  }
};

console.log("Digite uma lista de números separados por vírgula: ");

readline.on("line", (input) => {
  const numeros = input.split(',').map(num => parseInt(num, 10));
  console.log("Mediana: " + acharMediana(numeros));
  readline.close();
});

