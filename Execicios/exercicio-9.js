// 9 - Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
function media(lista) {
    let resultado = 0;

    for(let valor of lista) {
        resultado =+ valor;
    }

    return resultado / lista.length
}

function maiorEntreDois(n1, n2) {
    if (n1 > n2) {
        return n1
    }else{
        return n2
    }
}

function menorEntreDois(n1, n2) {
    if (n1 < n2) {
        return n1
    }else{
        return n2
    }
}
function pessoas(listaDePessoas){
    var maiorAltura = 0;
    var menorAltura = 999;
    var idades = []
    for(let pessoa of listaDePessoas){
        maiorAltura = maiorEntreDois(maiorAltura,pessoa.altura)
        menorAltura = menorEntreDois(menorAltura, pessoa.altura)
        idades.push(pessoa.idade)
    }
    console.log(maiorAltura)
    console.log(menorAltura)
    console.log(media(idades))

}

    pessoas([{altura:1.8,idade:23},
     {altura:1.9,idade:27},
     {altura:1.65,idade:33},
     {altura:1.83,idade:44},
     {altura:1.91,idade:45},
     {altura:1.54,idade:16}])