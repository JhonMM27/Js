// Operadores Aritméticos
let a = 10;
let b = 5;

console.log(a + b); // Suma: 15
console.log(a - b); // Resta: 5
console.log(a * b); // Multiplicación: 50
console.log(a / b); // División: 2
console.log(a % b); // Módulo: 0
console.log(a ** b); // Exponenciación: 100000

// Operadores de Asignación
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15
c -= 3; // c = c - 3
console.log(c); // 12
c *= 2; // c = c * 2
console.log(c); // 24
c /= 4; // c = c / 4
console.log(c); // 6
c %= 3; // c = c % 3
console.log(c); // 0
c **= 2; // c = c ** 2
console.log(c); // 0

// Operadores de Comparación
console.log(a == b); // Igualdad: false
console.log(a === b); // Igualdad estricta: false 
console.log(a != b); // Desigualdad: true
console.log(a !== b); // Desigualdad estricta: true
console.log(a > b); // Mayor que: true
console.log(a < b); // Menor que: false
console.log(a >= b); // Mayor o igual que: true
console.log(a <= b); // Menor o igual que: false

// Operadores Lógicos
let x = true;
let y = false;

console.log(x && y); // AND lógico: false --> este es que cuando uno de los 2 no se cumple la exprecion es falsa
console.log(x || y); // OR lógico: true --> este es que cuando uno de los 2 se cumple la exprecion es verdadera
console.log(!x); // NOT lógico: false --> este es que si la exprecion es verdadera la convierte en falsa y viceversa

// Operadores de Incremento y Decremento
let d = 5;
console.log(d++); // Incremento: 5 (luego d es 6)
console.log(++d); // Incremento: 7
console.log(d--); // Decremento: 7 (luego d es 6)
console.log(--d); // Decremento: 5


// Operador de Tipo
console.log(typeof a); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object (esto es un error en JavaScript)
console.log(typeof function(){}); // function


// Operador Ternario
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes