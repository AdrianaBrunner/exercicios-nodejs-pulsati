//• Crie um programa que leia uma lista de palavras do usuário e as exiba em ordem inversa.


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const reverterPalavras = (palavras) => {
    return palavras.reverse();
  };
  
  console.log("Digite as palavras separadas por vírgula: ");
  
  readline.on("line", (input) => {
    const palavras = input.split(",");
    console.log("Palavras em ordem inversa: " + reverterPalavras(palavras));
    readline.close();
  });
  