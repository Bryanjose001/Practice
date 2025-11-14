let age =23

if (age == 23){
    console.log('La edad es 23')
}

if (age == 23) {
    console.log("La edad es 23")
} else {
    console.log("La edad no es 23")
}
 
if (age == 23) {
    console.log("La edad es 23")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 23 ni es menor de edad")
}

const message = age == 23 ? "La edad es 23" : "La edad no es 23"
console.log(message)


let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)