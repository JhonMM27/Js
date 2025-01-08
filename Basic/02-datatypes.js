// Tipos de datos en JavaScript

// Número
let numero = 42;
let decimal = 12.5
console.log(typeof numero); // "number"
console.log(typeof decimal); // "number" ---> numeros decimales

// Cadena de texto (String)
let texto = "Hola, mundo!";
console.log(typeof texto); // "string"

// Booleano
let verdadero = true;
let falso = false;
console.log(typeof verdadero); // "boolean"
console.log(typeof falso); // "boolean"

// Undefined
let indefinido;
console.log(typeof indefinido); // "undefined"

// Nulo (Null)
let nulo = null;
console.log(typeof nulo); // "object" (esto es un error en JavaScript, debería ser "null")

// Símbolo (Symbol)
let simbolo = Symbol("simbolo");
console.log(typeof simbolo); // "symbol"

// Objeto
let objeto = { nombre: "Juan", edad: 30 };
console.log(typeof objeto); // "object"

// Función
function funcionEjemplo() {
    return "Hola!";
}
console.log(typeof funcionEjemplo); // "function"

// BigInt (para números enteros muy grandes)
let numeroGrande = BigInt(9007199254740991);
console.log(typeof numeroGrande); // "bigint"