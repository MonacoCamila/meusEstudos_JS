console.log('Bem Vindos ao Starter!!')
//Duas barras inserem comentarios no JS

//Objetcts

const person ={
    name: John,
    age: 30,
    weight: 88.6,
    isAdmin:true 
}

console.log('${person.name} tem ${person.age} anos')

//Arrays

const Animals= [
    'Lion',
    'Monkey',
    'Cat'

]

//acessar valores dentro do array
console.log (animals[2])

//EXERCICIOS
//1.Declare uma variavel de nome WEIGHT 
let weight;

//2.Que tipo de dado é a variavel acima?
console.log(typeof weight)

/*
3. Declare uma variavel e atribua valores para cada um dos dados:
*Name:String
*Age: Number 
*Stars: Number (float)
*isSubscribed: Boolean 
*/

let name = 'Mike'
let age = 23
let stars = 4.8
let isSubscribed = true 

/* 
4. A variavel Student é de que tipo de dados? 


4.1 Atribua a ela as mesmas variaveis do ex 3. 


4.2 Mostre no console a seguinte mensagem: 
    <name> de idade <age> pesa <weight> kg. 


*/

let student = {};

console.log(typeof student) //object

let student = {
 name = 'Mike'
 age = 23
 stars = 4.8
 isSubscribed = true 

}

console.log( '${student.name} de idade ${student.age} pesa ${student.stars} kg.')

/* 
5. Declare uma variavel do tipo Array de nome Students e atribua a ela nenhum valor, somente o array vazio. 
*/ 

let students = [];

/*
6. Retribua valor a variavel acima, colocando dentro dela o objeto student da questao 4. 
*/ 

students = [
    student 
]

console.log(students)

//7.Coloque o console o valor da posicao zero do Array acima: 

console.log(students[0])

//8.Crie um novo student e coloque ele na posicao 1 do Array students

const john= {
    name:'john',
    age:14,
    weight:55,
    isSubscribed:true
}

students[1] = john 

/*
Prototype

prototype-based language 
prototype chain 
__proto__

*/ 

//MANIPULACAO DE STRINGS E NUMEROS 

//transformar string em numero e vice e versa 

let string ="123"
console.log(number(string))
let number = 321
console.log(string(number))

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero 

let word ="Paralelepipedo"
console.log(word.length) //14 
let number = 1234
console.log(string(number).length) //4

//transformar letras maiusculas em minusculas //vice e versa 

let word ="programar eh mto legal"
console.log(word.toUppercase()) //toLowercase

//Manipulando Arrays 

let techs = ["html", "css", "js"]

//add um item no fim 
techs.push("node.js")
//add um item no comeco 
techs.unshift("sql")
//remove fim
techs.pop()
//remove comeco
techs.shift()
//pegar somente alguns elementos do array 

//remove 1 ou mais itens 
//encontrar a position de 1 elemento 

/*EXPRESSOES E OPERADORES 

- expressions 
- Operators 
Binary 
Unary 
Ternary 

*/ 

let number = 1
console.log(number +1) //binary
console.log(--number +1) // unary

//type of DELETE 

const person = {
    name: "myke",
    age:30,

}

delete person.age 
console.log (person)

/* OPERADORES DE COMPARACAO 

= RECEBE O VALOR 
== IGUAL A 
=== ESTRITAMENTE IGUAL A 

ONE == 1 
ONE = 2 

!= DIFERENTE DE 
!== ESTRITAMENTE DIFERENTE DE 

> MAIOR QUE 
>= MAIOR IGUAL A 
< MENOR QUE 
<= MENOR IGUAL A 

*/ 

// OPERADORES DE ATRIBUICAO 
//ASSIGNMENT 
//X = 1 ( X RECEBE 1)

//OPERADORES LOGICOS 

//2 VALORES BOOLEANOS, QUANDO VERIFICADOS RESULTARA EM TRUE OR FALSE 

//ADD &&
//console.log(uma coisa && outra)

//ADD || OR 

//ADD ! NOT 

//if (condição) {
    //apenas será executado o bloco de código caso condição seja true
//} else {
  // apenas será executado o bloco de código caso condição do if seja false
//}

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}
/////////////////////////////////////////////
//throw
function sayMyname(name='') {

}

//try...catch
try{
    sayMyname ('Myke')
} catch (e) {
    console.log(e)
}

console.log('apos ao try/catch')
///////////////////////////////////////////

//estrutura de repeticao - loop 
//for
// break- para a execucao do loop
//continue - pula a execucao do momento

for(let i=0; i < 10; i++) {
    console.log(i)
    if(i===50){
        break;
    }
}

//////////////////////////////////////
//while 

let i= 0;
while(i < 10) {
    console.log(i)
}

// for ....of 

let name = 'Myke'
let names = ["joao", "paulo", "pedro"]

for (let name of names) {
    console.log(char)
}

// for...in

let person = {
    name:"john",
    age:30,
    weight:88
}

for (let property in person) {
    console.log(property)
}























    




