//• Crie um programa que verifique se um número fornecido pelo usuário é par ou ímpar.

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Digite um numero: ', number => {
    if(number%2==0) {
        console.log(`O número ${number} é par`);
    } else {
    console.log(`O número ${number} é impar`);
    }
    readLine.close();
});