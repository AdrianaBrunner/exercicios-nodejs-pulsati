const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Quem é você?', name => {
    console.log(`Olá ${name}!`);
    readLine.close();
});