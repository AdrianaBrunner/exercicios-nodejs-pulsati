const Editora = require('./editora').Editora;
const Livro = require('./livro').Livro;
const Autor = require('./autor').Autor;

const salvarArquivo = require('./arquivoPromiseLivro').salvarArquivo
const lerArquivo = require('./arquivoPromiseLivro').lerArquivo

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    readLine.question('Sistema de Gerenciamento de Biblioteca\nEscolha uma opção: ', (opcao) => {
        let opcaoEscolhida = opcao
        
        if (opcaoEscolhida == 1) {
            addAutor()
        } else if (opcaoEscolhida == 2) {
            addEditora()
        } else if (opcaoEscolhida == 3) {
            addLivro()
        } else if (opcaoEscolhida == 4) {
            listarLivros()
        }
        else if (opcaoEscolhida == 5) {
            buscarLivroPorNome()
        }
        else if (opcaoEscolhida == 6) {
            buscarLivrosDoAutor()
        } else if (opcaoEscolhida == 0) {
            console.log("Saindo do sistema!")
            readLine.close();
        } else {
            console.log('Opção inválida!')
            showMenu()
        }
    })
}

showMenu();

const autores = [];
const editoras = [];
const livros = [];

const addAutor = () => {
    readLine.question('Digite o nome do autor: ', (nomeAutor) => {
        readLine.question('Digite o codigo do autor: ', (codigoAutor) => {
            const autor = new Autor(nomeAutor, codigoAutor);
            autores.push(autor)
            console.log(autores);
            salvarArquivo('autor.json', autor.getdadosAutor())
            showMenu()
        })
    })
}

const addEditora = () => {
    readLine.question('Digite o nome do editora: ', (nomeEditora) => {
        readLine.question('Digite o codigo do editora: ', (codigoEditora) => {
            readLine.question("Digite a edicao: ", (edicao) => {
            const editora = new Editora(nomeEditora, codigoEditora, edicao);
            editoras.push(editora)
            salvarArquivo('editora.json', editora.getdadosEditora())
            showMenu()
            })
        })
    })
}

const addLivro = () => {
    readLine.question('Digite o nome do livro: ', (nomeLivro) => {
        readLine.question('Digite o codigo do autor: ', (codigoAutor) => {
            readLine.question("Digite o codigo do livro: ", (codigoLivro) => {
            const livro = new Livro(nomeLivro, codigoAutor, codigoLivro);
            livros.push(livro)
            salvarArquivo('livro.json', livro.getdadosLivro())
            showMenu()
            })
        })
    })
}

const listarLivros = () => {
    console.log("Lista de livros\n")
    console.log(livros);
    console.log("Lista de autores\n")
    console.log(autores);
    console.log("Lista de editoras\n")
    console.log(editoras);

    showMenu();
}