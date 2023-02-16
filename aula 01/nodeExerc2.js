//• Crie um programa que leia um nome do usuário e exiba uma saudação personalizada na tela.

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Qual seu nome? ', name => {
    console.log(`Olá prezado(a) ${name}!`);
    readLine.close();
});