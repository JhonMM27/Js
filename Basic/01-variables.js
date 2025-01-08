// var
/*
Ámbito: Tiene un ámbito global o de función, lo que significa que si se declara dentro de una función, es local a esa función.
Sin embargo, si se declara fuera de una función, es accesible globalmente.

Reasignación y redefinición: Permite la reasignación y puede ser redefinido en el mismo ámbito.

Hoisting: Se eleva al inicio de su ámbito, pero no se inicializa; su valor será undefined hasta que se asigne un valo

*/
console.log(a); // undefined (por hoisting)
var a = 10;
console.log(a); // 10

if (true) {
    var b = 20;
}
console.log(b); // 20 (accesible fuera del bloque)

//Ejemplo de Mauro

var helloWorld = 'Hello World';

console.log(helloWorld);

// let
Características:

// Ámbito: Tiene un ámbito de bloque, lo que significa que solo es accesible dentro del bloque {} donde se declaró.

// Reasignación y redefinición: Permite la reasignación, pero no puede ser redefinido dentro del mismo ámbito.

// Hoisting: Se eleva al inicio de su ámbito, pero no está accesible antes de su declaración (temporal dead zone).

// console.log(x); // Error: Cannot access 'x' before initialization
let x = 5;

if (true) {
    let y = 15;
    console.log(y); // 15
}
// console.log(y); // Error: y is not defined (ámbito de bloque)

//Ejemplo de Mauro

let helloWorld = 'Hello World';
console.log(helloWorld);

// const

Características:

// Ámbito: Igual que let, tiene un ámbito de bloque.

// Reasignación y redefinición: No permite reasignación ni redefinición.

// Hoisting: Similar a let, pero no está accesible antes de su declaración.

// Inmutabilidad: Aunque la referencia de la variable no puede cambiar, los valores dentro de objetos o arrays referenciados pueden modificarse.


const z = 30;
// z = 40; // Error: Assignment to constant variable

const obj = { name: "John" };
obj.name = "Doe"; // Esto es permitido
console.log(obj); // { name: "Doe" }



// Cuándo usar cada uno
// Usa const para valores que no cambiarán.
// Usa let para valores que puedan cambiar y cuando necesites un ámbito de bloque.
// Evita usar var en código moderno, ya que su ámbito global o de función puede causar errores difíciles de rastrear.