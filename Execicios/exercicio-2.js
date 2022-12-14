let n1 = 2;
let n2 = 1;
let n3 = 5;

let numeros = [n1, n2, n3];

let listaOrdenada = numeros.sort((a, b) => a - b);

for (let i in listaOrdenada){
    console.log(listaOrdenada[i])
}