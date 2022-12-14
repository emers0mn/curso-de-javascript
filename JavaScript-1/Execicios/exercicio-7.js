//7 - Escreva uma função que receba um objeto e imprima suas propriedades


function propriedades(obj){
    for(let p in obj){
        console.log(p)
    }
}

var pessoa = {nome: "José", idade:35, altura: 1.80}

propriedades(pessoa)
