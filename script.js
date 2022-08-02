let caixa = "Hello, World";
let maisCoisas = caixa + ", como vai por aí?";

let tittle = document.getElementById('tittle');

tittle.addEventListener("click", mudou);

function mudou (){
    tittle.innerHTML = maisCoisas;
};

let a = true;
let b = false;

let c = a || b;

console.log(c);
