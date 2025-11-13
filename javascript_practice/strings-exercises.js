// 1. Concatena dos cadenas de texto
let name = 'Bryan'
let greeting = 'Hey, '+ name + '!'
console.log(greeting)


// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length)



// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[11])



// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase()) 
console.log(greeting.toLowerCase())




// 5. Crea una cadena de texto en varias líneas
let varias_lineas = `voubwvbuojwqbvowbvbuowqb
bgbhvgqwbbv ob
geujoieqbvg
ujbbedvbwqo`



// 6. Interpola el valor de una variable en un string
let email = "bryanjose@gmail.com"
console.log(`Hola, ${name}! Tu email es ${email}.`)



// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replace(/ /g,"-"))




// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(greeting.includes('Hey'))




// 9. Comprueba si dos strings son iguales
console.log(greeting == varias_lineas)




// 10. Comprueba si dos strings tienen la misma longitud
console.log(varias_lineas.length == greeting.length)
