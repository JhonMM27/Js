// crea un array que alamacene 5 animales
let animales = ["perro", "gato", "pez", "pajaro", "tigre"]

//añade dos mas. Uno al inicio y otro al final

animales.unshift("leon") //--> Añnade al principio

animales.push("elefante") // --> Añade al final 

console.log(animales)   

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)

console.log(animales)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])

// 5. Añade dos más. Uno de ellos repetido
mySet.add("libro6")
mySet.add("libro6")

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("Verano", ["Junio", "Julio", "Agosto"])

console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["Brais", "Moure", "mouredev", 37, true]
let mySet2 = new Set(myArray)
let myMap2 = new Map([["Array", mySet2]])

console.log(myMap2)