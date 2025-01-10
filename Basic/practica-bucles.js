
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for(let i = 1; i <= 20; i++) {
        console.log(i)

    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

    let suma = 0
    for(let i = 1; i <= 100; i++) {
        suma += i
    }
    console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    for(let i = 1; i <= 50; i++) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

    let nombres = ["Brais", "Moure", "mouredev", "JavaScript"]
    for(let i = 0; i < nombres.length; i++) {
        console.log(nombres[i])
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

    let texto = "Hola JavaScript"
    let vocales = 0
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u") {
            vocales++
        }
    }

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    let numeros = [1, 2, 3, 4, 5]

    let producto = 1
    for(let i = 0; i < numeros.length; i++) {
        producto *= numeros[i]
    }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    for(let i = 1; i <= 12; i++) {
        console.log(`5 x ${i} = ${5 * i}`)
    }

// 8. Usa un bucle para invertir una cadena de texto

    let cadena = "JavaScript"
    let invertida = ""
    for(let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i]
    }
    console.log(invertida)  

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

    let a = 0
    let b = 1
    let c = 0
    for(let i = 0; i < 10; i++) {
        console.log(c)
        a = b
        b = c
        c = a + b
    }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    let numeros2 = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100]
    let mayores10 = []
    for(let i = 0; i < numeros2.length; i++) {
        if(numeros2[i] > 10) {
            mayores10.push(numeros2[i])
        }
    }

    //MODIFICAR PARA USAR OTROS BUCLES