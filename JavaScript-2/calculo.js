let button = document.getElementsByTagName("button")[0];

function soma(){
    let valorA = parseInt(document.getElementsByTagName("input")[0].value);
    let valorB = parseInt(document.getElementsByTagName("input")[1].value);

    let resultado = valorA / valorB;

    let retorno = document.getElementById("resultado");

    retorno.innerHTML = resultado;
}

button.addEventListener("click", soma);