//3 - Escreva uma função que receba um Array com 5 números e retorne o maior deles 

function maiorEntreDois(n1, n2) {
    if (n1 > n2) {
        return n1;
    }else{
        return n2;
    }
};

function maiorNum(lista){
    var maior = lista[0]
    for (let num of lista) {
       maior = maiorEntreDois(num,maior)
    }
    return maior
}

console.log(maiorNum([9,25,3,20,18]))
