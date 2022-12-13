let aluno = {nome: 'Emerson', notas: [3, 4]};

let novProp = 'sobreNome';

aluno[novProp] = 'Pereira';
aluno.matricula = 12345;

let nota = (aluno.notas[0] + aluno.notas[1]) / 2

console.log(aluno.nome + ' ' + aluno.sobreNome);
if (nota > 6){
    console.log('Seu média é: ' + nota +' Você está aprovado');
}
else{
    console.log('Seu média é: '+ nota +' Você está reprovado');
}
