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
