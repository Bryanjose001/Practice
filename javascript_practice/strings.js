//strings


let myName = 'Bryan'
let greeting = 'Hola, ' + myName + '!'

console.log(greeting)
console.log(typeof greeting)

console.log(greeting.length)


console.log(greeting[0])
console.log(greeting[11])


console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Bryan"))
console.log(greeting.indexOf("pedro"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Bryan"))
console.log(greeting.includes("Jose"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Bryan", "Jose")) // Reemplazo

let message = `Hola, este
es mi
JavaScript`
console.log(message)

// Interpolación de valores
let email = "bryanjose@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)