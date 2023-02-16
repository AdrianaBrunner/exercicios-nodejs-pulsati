//• Crie um programa que leia uma string do usuário e verifique se todas as letras são únicas.

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  
  console.log("Digite a palavra: ");
  
  readline.question("Palavra: ", string => {
    const unique = isUnique(string);
    console.log(`Todas as letras são unicas? ${unique}`);
    readline.close();
  });

  function isUnique(string) {
    const charMap = {}
    for(let char of string) {
        if(charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }
}