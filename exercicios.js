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

function sum(array){
    let total= 0;

    for (let value of array) {
        total +=value 
    }

    return total 
}

function calculateBalance (){

 const calculateIncomes = sum(family.incomes)
 const calculateExpenses = sum(family.expenses)

 const total = calculateIncomes - calculateExpenses

 const itsOK = total >= 0

 let balanceText = "negativo"
 if (itsOK) {
    balanceText = "positivo"
 }

 console.log ("Seu saldo é ${balanceText}: ${total}")

}

/* 
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/ 

    // transform ('50F')
    function transformDegree (degree){
     const celsiusExists = degreee.toUppercase().includes("C")
     const fahrenheitExists = degree.toUppercase ().includes ("F")

      //fluxo de erro 
        if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau nao identificado")
        }
    

      //fluxo ideal, F -> C 
      let updateDegree = (degree.toUppercase().replace("F", ""));
      let formula = (fahrenheit) => (fahrenheit-32)*5/9
      let degreeSign = "C"

      //fluxo alternativo C -> 
        if(celsiusExists){
        updateDegree = (degree.toUppercase().replace("F", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = "F"  
     }

     return formula (updateDegree) + degreeSign
     
     try{
        transformDegree("50F")
        transformDegree("50Z")

     } catch(error){
        console.log(error.message)
         }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategory = booksByCategory.length

for(let category of booksByCategory) {
    console.log("total de livros na categoria:", category.category)
    console.log(category.books.length) }

function countAuthors() {
    let authors = [];

    
}




