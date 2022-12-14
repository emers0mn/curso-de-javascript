//8 - Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.



function data(d){
    let m = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"  
    ]
    return {
        dia: d.getDate(),
        mes: m[d.getMonth()],
        ano: d.getFullYear()
    }
}

console.log(data(new Date("06/06/1999")))

