// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set --> sirve para añadir un nuevo elemento al map

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get --> sirve para obtener el valor de una clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has --> sirve para ver so existe esa claveen el map

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete  --> sirve para eliminar una clave

myMap.delete("email")

console.log(myMap)

// keys, values y entries  --> sirven para obtener las claves, los valores y las entradas del map

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size  --> sirve para obtener el tamaño del map

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)