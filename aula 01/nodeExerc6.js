//• Crie um programa que leia um número do usuário e exiba a tabuada desse número.

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Digite um número ', numero => {
    console.log(`\nTabuada do número: ${numero}\n`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    readLine.close();
});