// 5 - Escreva uma função que receba um número e imprima se ele é par ou ímpar

function parImpar(n1) {

    let calc = n1%2;

    if (calc === 0){
        return console.log("Ele é par");
    
    }else {
        return console.log("Ele é impar")
    }
}

parImpar(5)