// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1
while (i < 21){
    console.log(i)
    i++
}

for (let i = 1; i < 21; i++){
    console.log(i)
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let num = 1 
while (num <101){
    console.log(num)
    num++
}




// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i < 51; i++){
    if (i % 2 == 0)
        console.log(i)
}




// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const myArray = ['Bryan','Jose','camacho','Santiago']

for (let value of myArray){
    console.log(value)
}




// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Cadena de texto";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
    }
}

console.log("Número de vocales:", contador);






// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const myArray1 = [1, 2, 3,4]
let producto = 1
for (let value of myArray1){
    producto = producto * value
}
console.log(producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let num1 = 5
for (let i = 1; i <= 10; i++){
    console.log(num1 *i)

}




// 8. Usa un bucle para invertir una cadena de texto
let texto1 = "hola";
let alrevez = "";

for (let i = texto.length - 1; i >= 0; i--) {
    alrevez += texto[i];
}

console.log(alrevez);



// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
    let proximonumero = a + b;
    console.log(proximonumero);

    a = b;
    b = proximonumero;
}



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeros = [5, 12, 8, 20, 3];
let mayoresque10 = [];

for (let num of numeros) {
    if (num > 10) {
        mayoresque10.push(num);
    }
}

console.log(mayoresque10);