//• Crie um programa que leia uma string do usuário e exiba a primeira letra de cada palavra nela.


const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Digite uma frase', frase => {
    
    readLine.close();
});