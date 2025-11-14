let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)



myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Josew"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Bryan"
// myArray[0] = "Jose"
myArray[1] = "mouredev"

console.log(myArray)



myArray = []



myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)



console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)



console.log(myArray.length)



myArray = []
myArray.length = 0 // alternativa
console.log(myArray)



myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)



myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)