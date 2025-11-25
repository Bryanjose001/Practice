// 1. Crea una función que reciba dos números y devuelva su suma
function mySum(a, b){
    console.log(a+b)
}
mySum(1,6)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numeroMayor(numeros){
    let mayor = 0
    for (let num of numeros){
        if(num > mayor) 
            mayor = num
    }
    return mayor
}
console.log(numeroMayor([1, 2, 3, 4, 5, 6, 7]))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(){
    let texto = 'Cadena de textoo'
    let contador = 0
    for (let i = 0; i < texto.length; i++){
        let letra = texto[i].toLowerCase();
        if (letra === 'a' || letra === 'e'||letra==='i'|| letra === 'o'||letra === 'u'){
            contador++
        }    
    }
     console.log("Número de vocales:", contador);

}
vocales()


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function  stringArray(){
    let texto = ""
    let newArray = []
    for (let i = 0; i < texto.length; i++){
        let letra = texto[i].toUpperCase();
        newArray.push(letra)
    }
    console.log(newArray)
}
stringArray()


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numeroPrimo(numero){
    if (numero <= 1){
        return false
    }
for (let i = 2; i < numero;i++){
    if (numero % i ===0){
        return false
    }
}
return true
}
console.log(numeroPrimo(17))



// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function twoArrays(arr1,arr2){
    let newArray = []
    for(let elemento of arr1){
        if(arr2.includes(elemento)){
            newArray.push(elemento);
        }
    }
    return newArray
}
console.log(twoArrays([1,2,3,4,],[2,4,3,5]))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function arrays(newArray){
    sumNewArray = 0
    for (let i of newArray){
    if (i % 2 === 0){
        sumNewArray += i
        }
    }
    return sumNewArray
}
arrays([1,2,3,4])



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareArray(numbers) {
    return numbers.map(num => num ** 2);
}

const originalArray = [1, 2, 3, 4];
const squaredArray = squareArray(originalArray);
console.log(squaredArray); 


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ')
}

const original = "Hola mundo desde JavaScript"
const reversed = reverseWords(original)
console.log(reversed) 






// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n < 0) throw new Error("Factorial no definido para negativos")
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))