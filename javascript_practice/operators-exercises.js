// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10
let suma = a + b 
let resta = a - b
let multiplicación = a * b
let división = a / b

console.log(suma)
console.log(resta)
console.log(multiplicación)
console.log(división)
a++
console.log(a)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let c = 7
console.log(c)
c += 2
console.log(c)

c -= 2
c *= 2
c /= 2
c %= 2
c **= 2


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let number = 5
console.log(a < b)
console.log(number == number)
console.log(number <= 6)
console.log(a == '6')
console.log(b >= number)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(number == b)
console.log(number >= 6)
console.log(a == '7')
console.log(b <= number)


// 5. Utiliza el operador lógico and
console.log(7 > 11 && 23 < 21)



// 6. Utiliza el operador lógico or
console.log(5 < 10 || 15 < 20)




// 7. Combina ambos operadores lógicos
console.log(5 > 10 && 15 > 20 || 30 < 40)


// 8. Añade alguna negación
console.log(!(7 > 11))




// 9. Utiliza el operador ternario
const isWalking = false
isWalking ? console.log('esta caminado!') : console.log('no esta caminando!')




// 10. Combina operadores aritméticos, de comparáción y lógicas