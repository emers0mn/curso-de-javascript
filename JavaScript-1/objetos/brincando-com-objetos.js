let nome = prompt("Digite o seu nome: ");
let sobreNome = prompt("Agora o seu sobrenome: ");
let tittle = document.getElementById("tittle");


function dadosPessoais(nome, sobreNome){

    let listaDados = [{
        nome: nome,
        sobreNome: sobreNome
    }]


    for(let i in listaDados){
       console.log(listaDados[i].nome);
       tittle.innerHTML = "Olá, " + (listaDados[i].nome)
    }

}

dadosPessoais(nome, sobreNome)

