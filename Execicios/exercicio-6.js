// 6 - Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

function multiplode4(){
    for(let i = 0; i <= 100; i++){
        if(i%4 === 0){
        console.log("pi");
        
        
       }else {
        console.log(i)}
    }

}

multiplode4()