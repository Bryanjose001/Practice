// 1. Escribe un comentario en una línea
//Hola mundo
// 2. Escribe un comentario en varias líneas
/*
bryan is learning javascrpit
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// tipos de datos primitivos
let name = 'Bryan Jose'

//numeros (numbers)
let age = 23

//booleans
let isStudent= true
let isTeacher= false

//undefined
let undefinedvalue
console.log(undefinedvalue)

//Null
let nullvalue = null

//symbols
let mySymbol = Symbol('my symbol')

//Big int
let myBigint = 953753678282265247926642n
let myBigint2 = BigInt(25262654626561251651951055151737531)



// 4. Imprime por consola el valor de todas las variables

console.log(name)


console.log(age)


console.log(isTeacher)
console.log(isStudent)


console.log(undefinedvalue)

console.log(nullvalue)

console.log(mySymbol)

console.log(myBigint)
console.log(myBigint2)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)


console.log(typeof age)


console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullvalue)

console.log(typeof mySymbol)

console.log(typeof myBigint)
console.log(typeof myBigint2)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = 'jose'

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name =  null
console.log(typeof name)


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const name1 = 'Bryan Jose'

//numeros (numbers)
const age1 = 23

//booleans
const isStudent11= true
const isTeache1r= false

//undefined
/*const undefinedvalue
console.log(undefinedvalue)*/

//Null
const nullvalue1 = null

//symbols
const mySymbol1 = Symbol('my symbol')

//Big int
const myBigint1 = 953753678282265247926642n
const myBigint22 = BigInt(25262654626561251651951055151737531)

// 9. A continuación, modifica los valores de las constantes

name1 = null
console.log(typeof name1)
//false no se puede modificar las valores de las constantes 

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
name1 = null
console.log(typeof name1)*/