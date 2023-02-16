//• Crie um programa que leia um número do usuário e exiba o seu fatorial.

const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline1.question("Informe o numero: ", (num1) => {

    function fatorial(num) {
        if (num < 0) return -1;
        else if (num == 0) return 1;
        else {
            return num * fatorial(num - 1);
        }
    }
    console.log(fatorial(5))
    readline1.close();
});


