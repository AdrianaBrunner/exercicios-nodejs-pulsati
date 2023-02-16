var teste1 = "Teste 1";
let teste2 = "Teste 2";
const teste3 = "Teste 3";

console.log(teste1);
console.log(teste2);
console.log(teste3);


let a = "1";
let b = 1;

console.log(a==b);

console.log(!!a); //para validar se existe valor dentro da variavel
console.log(!a);

let e = "e";
let obj = {a:1,b:2};
obj['c']=3;
obj.d=4;
obj[e]=5
console.log(obj);

//Closure
function novoUsuario(nome, idade) {
    return {
        dados: {
            nome: nome,
            idade: idade
        },
        setNome: function(novoNome) {
            this.dados.nome = novoNome;
        },
    }
}

const u = novoUsuario("Adriana", 25)
console.log(u)
u.setNome("João")
console.log(u)