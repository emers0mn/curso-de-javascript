
// Esta função retorna um objeto
function timesCadastrados(nomeDoTime, cidade, estado ){

    return {
        equipe: nomeDoTime,
        cidade: cidade,
        estado: estado
    }
}


//Este array recebe a função que retorna objetos
let times = [
    timesCadastrados('São Paulo', 'Piracicaba', 'São Paulo'),
    timesCadastrados('Palmeiras', 'Florianopoles', 'Santa Catarina'),
    timesCadastrados('Piraporinha', 'Recife', 'Pernambuco')
]



for (let i in times){
    console.log(times[i].equipe + ' da cidade: '+ times[i].cidade + ' de '+ times[i].estado)
}
// Por isso, podemos misturar os arrays com as chaves dos objetos aqui embaixo.