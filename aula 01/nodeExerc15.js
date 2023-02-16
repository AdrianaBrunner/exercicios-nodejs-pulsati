//• Crie um programa que leia uma string do usuário e verifique se é um palíndromo.

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Digite uma frase ou palavra: ', string => {

    stringSemEspacos = string.split(" ").join("")

    stringTodaMinuscula = stringSemEspacos.toLowerCase()

    stringInvertida = stringTodaMinuscula.split("").reverse().join("")

    if (stringInvertida == stringTodaMinuscula) {
        console.log("A frase/palavra é um palíndromo")
    } else {
        console.log("A frase/palavra não é palíndromo")
    }

    readLine.close();
});

