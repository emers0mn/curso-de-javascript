//10 - Escreva um programa que imprima o seguinte padrão
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

function piramide(valor){
    
    
    for(let i = 1; i <= valor; i++){
        let p = "";
        for(let k = 1; k <= i; k++){
            p += "😎 "
        }
    
        console.log(p)
    }

}

piramide(25)
