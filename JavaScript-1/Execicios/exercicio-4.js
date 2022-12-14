//4 - Escreva uma funçao que receba um array de 5 números e retorne a média

function media(lista) {
    let resultado = 0;

    for(let valor of lista) {
        resultado =+ valor;
    }

    return resultado / lista.length
}

console.log(media([2, 3, 5, 6, 66]))