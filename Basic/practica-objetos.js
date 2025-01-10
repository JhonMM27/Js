
// 1. Crea un objeto con 3 propiedades
let myObject = {
    name: "Jhon",
    lastName: "Mesones",
    age: 20
}
// 2. Accede y muestra su valor
console.log(myObject.name)

// 3. Agrega una nueva propiedad
myObject.email = "mmanayallejhone@uss.edu.pe"

// 4. Elimina una de las 3 primeras propiedades

delete myObject.age

// 5. Agrega una función e invócala

myObject.saludar = function(){
    console.log("Hola")
}


// 6. Itera las propiedades del objeto
for(let key in myObject){
    console.log(key + ": " + myObject[key])
}

// 7. Crea un objeto anidado

    myObject.address = {
        street: "Av. Los Incas",
        number: 123
    }

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(myObject.address.street)

// 9. Comprueba si los dos objetos creados son iguales

let myObject2 = {
    name: "Jhon",
    lastName: "Mesones",
    email: "mmanayallejhone@uss.edu.pe"   
}

console.log(myObject === myObject2)


// 10. Comprueba si dos propiedades diferentes son iguales

console.log(myObject.name == myObject2.name)