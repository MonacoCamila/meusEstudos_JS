/* ### Transformar notas escolares 

Crie um algoritimo que transforme as notas do sistema 
numerico para sistema de notas em caracteres A B C....

#de 90 para cima -A
#entre 80 - 89 - B
#entre 70 - 79 - C
#entre 60 - 69 - D
#menor que 60 - F 

*/ 

function getScore(score){
    
    let score = 100

    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreF = score >= 60 && score <=0
    
    let scoreFinal;

    
    if (scoreA) {
        scoreFinal = 'A'
      } else if (scoreB)
    {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreC) {
        scoreFinal = 'D'
    } else if (scoreD) {
        scoreFinal = 'F'
    } else {
        scoreFinal = "Nota Invalida"
    }

    return scoreFinal

}

//testing 

console.log(getScore (101))
console.log(getScore (10))
console.log(getScore (61))
console.log(getScore (90))

/* 

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: [] 
* despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/ 

let family = {
    incomes: [ 2500, 3200, 500, 1000 ] ,
    expenses: [ 1500, 600, 2000, 89]
}

function calculateBalance () {
    
}




