import readline from 'readline';
var resp = [];

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('DIGITE O COMANDO CSS: \n(SAIDA PARA SAIR)')
leitor.on('line', function (line) {

    if (line.toUpperCase() == 'SAIDA') {
        leitor.close();
        resp.map(item => item.toLowerCase()).sort().map((item, index) => console.log(`${index + 1}: ${item}`));
    }

    resp.push(line)
});

