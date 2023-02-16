//• Crie um programa que leia uma string do usuário e exiba as suas letras em ordem alfabética.

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  
  console.log("Digite a palavra: ");
  
  readline.question("Palavra: ", (input) => {
    console.log("Palavras em ordem alfabética: " + input.split("").sort());
    readline.close();
  });