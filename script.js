let idade = 0;
let negativo = "Você não pode comprar";
let positivo = "Acesso permitido";
let tittle = document.getElementById("tittle");

idade = parseInt(prompt("Coloque aqui a sua idade: "));



if (idade < 18) {
    console.log(negativo)
    tittle.innerHTML= "Sua mãe sabe que você está acessando esses sites?"
} 
else{
    tittle.innerHTML= "É hora da maldade"
    console.log(positivo)
}