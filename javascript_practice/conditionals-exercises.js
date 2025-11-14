// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = 'Bryan'
if (name == 'Bryan'){
    console.log('Este es mi nombre:Bryan')
}



// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = 'Bryan12'
let contraseña = 'Bryan1234'

let usuarioCorrecto = 'Bryan12';
let contraseñaCorrecta = 'Bryan1234';

if (usuarioCorrecto == usuario){
    console.log('Tu usuario es corecta!');
}
if(contraseñaCorrecta == contraseña){
    console.log('Tu contrasena es correcta!');
}

if(usuarioCorrecto !== usuario){
    console.log('Tu usuario es incorecta');
}
if(contraseñaCorrecta !== contraseña){
    console.log('Tu contraseña es incorecta!');
    }


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 7


if (numero == 0) {
    console.log("Tienes un cero")
} else if (numero < 0) {
    console.log("Tienes un negativo")
}else if (numero > 0 ){
console.log("Tienes un positivo")
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 14

if(age >= 18){
    console.log('YA puedes votar!')
}
else{
    let faltan = 18 - age;
    console.log(`No eres apto para votar!, te faltan ${faltan}`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const message = age >= 18 ? 'adulto' : 'menor'
console.log(message)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 'junio'
let primavera = ['marzo', 'abril', 'mayo']
let verano = ['junio', 'julio', 'agosto']
let otoño = ['septiembre', 'octubre', 'noviembre']
let invierno = ['diciembre', 'enero', 'febrero']


if (primavera.includes(mes)) {
    console.log("estas en primavera")
}else if (verano.includes(mes)) {
    console.log("estas en verano")
}else if (otoño.includes(mes)){
console.log("estas en otoño")
}else if (invierno.includes(mes)){
console.log("estas en invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias31 = ['enero','marzo', 'mayo','julio','agosto', 'octubre','diciembre']
let dias30 = ['abril','junio','septiembre','noviembre']
let dias28 = ['febrero']
let mes1 = 'junio'

if (dias31.includes(mes1)) {
    console.log("Tienes 31 dias")
}else if (dias30.includes(mes1)) {
    console.log("Tienes 30 dias")
}else if (dias28.includes(mes1)){
console.log("Tienes 28 dias")
}




// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = 3
let idiomas
switch(saludo){
    case 0:
        idiomas = 'Hola'
        break
    case 1: 
        idiomas = "Hello"
        break
    case 2:
        idiomas = 'bonjour'
        break
    case 3:
        idiomas = '안녕하세요'
        break
    default:
    idiomas = 'saludo incorrecto!'
}

console.log(idiomas)




// 9. Usa un switch para hacer de nuevo el ejercicio 6




// 10. Usa un switch para hacer de nuevo el ejercicio 7
let dias;

switch (mes.toLowerCase()) { 
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        dias = 31;
        break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        dias = 30;
        break;
    case 'febrero':
        dias = 28; 
        break;
    default:
        dias = 'Mes no válido';
}

console.log(`El mes de ${mes} tiene ${dias} días.`);
