//• Crie um programa que leia uma lista de palavras do usuário e as exiba em ordem alfabética.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortWords = (palavras) => {
  return palavras.sort();
};

console.log("Digite as palavras separadas por vírgula: ");

readline.on("line", (input) => {
  const palavras = input.split(",");
  console.log("Palavras em ordem alfabética: " + sortWords(palavras));
  readline.close();
});
