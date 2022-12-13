let media = function (n1, n2) {
    let nota1 = n1;
    let nota2 = n2;
    let media = (nota1 + nota2)/2;

    return media;
}

let resultado = media(6, 7);

console.log(resultado);


function saudacao(){
    return "olá, mundo!"
}

let s = saudacao;
console.log(s())