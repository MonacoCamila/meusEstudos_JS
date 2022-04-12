//function expression 

//parametros da function 


const sum= function(number1, number2) {
    console.log(number1 + number2)
}

sum (2, 3) //argumentos 

// Funcao eh um liquidificador 

function fazerSuco(fruta1, fruta2){ //parametros 
    return fruta1 + fruta2          //retorno 
}

const copo = fazerSuco('banana, maca')

console.log(copo)

//Function Scope 

let subject = "create video"


function criateThink (subject){
    subject = "study"
    return subject
}

console.log (subject)
console.log (createThink())
console.log (subject)

//function hoisting 

sayMyname()

function sayMyname() {
    console.log('Myke')
}
    
/*Function Constructor
- expressao NEW
- criar um novo objeto 
- this keyword 

*/ 

function Person (name) {
    this.name = name 
}
const Myke =new Person ('Myke')
console.log (Myke)





