// 1. Crea un array que almacene cinco animales
let my_array = ['PAnda','redpanda','perro','gatos','gecko'];


// 2. Añade dos más. Uno al principio y otro al final
my_array.unshift('koala');
my_array.push('chetah');
console.log(my_array)



// 3. Elimina el que se encuentra en tercera posición
my_array.splice(2,1)
console.log(my_array)



// 4. Crea un set que almacene cinco libros
let my_set = new Set(['Hangul','the hunger games','maze runner','The Great Gatsby','Harry Potter ','To Kill a Mockingbird'])


// 5. Añade dos más. Uno de ellos repetido
my_set.add('It')
console.log(my_set)
//my_set.add('It') no acepta duplicados



// 6. Elimina uno concreto a tu elección
my_set.delete('maze runner')
console.log(my_set)


// 7. Crea un mapa que asocie el número del mes a su nombre
let my_Map = new Map([
    [1,'enero'],
    [2,'febrero'],
    [3,'marzo'],
    [4,'abril'],
    [5,'mayo'],
    [6,'junio'],
    [7,'julio'],
    [8,'agosto'],
    [9,'septiembre'],
    [10,'octubre'],
    [11,'noviembre'],
    [12,'diciembre'],
])


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(my_Map.has(5));
console.log(my_Map.get(5));

console.log(my_Map.has(6));
console.log(my_Map.get(6));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = ['junio','julio','agosto']
my_Map.set('verano',verano)
console.log(my_Map)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1,2,3,4]
my_set = new Set(myArray)
my_map3 = new Map([])
my_map3.set(my_set)
console.log(my_map3)