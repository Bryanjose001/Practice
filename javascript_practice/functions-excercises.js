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




// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos




// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado



// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso




// 10. Crea una función que calcule el factorial de un número dado