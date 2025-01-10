// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function sum(a,b){
        return a + b
    }
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    
    let array = [1,2,3,4,5,6,7,8,9,10]

    function max(array){
        let max = 0
        for(let i = 0; i < array.length; i++){
            if(array[i] > max){
                max = array[i]
            }
        }
        return max
    }

    console.log(max(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    let texto = "Hola JavaScript"

    function countVowels(texto){
        let vocales = 0
        for(let i = 0; i < texto.length; i++) {
            if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u") {
                vocales++
            }
        }
        return vocales
    }

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    let arrayStrings = ["hola", "javascript", "mouredev"]

    function toUpperCase(arrayStrings){
        let newArray = []
        for(let i = 0; i < arrayStrings.length; i++){
            newArray.push(arrayStrings[i].toUpperCase())
        }
        return newArray
    }

    console.log(toUpperCase(arrayStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    function isPrime(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false
            }
        }
        return num > 1
    }

    console.log(isPrime(5))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

    let array1 = [1,2,3,4,5]
    let array2 = [4,5,6,7,8]

    function commonElements(array1, array2){
        let newArray = []
        for(let i = 0; i < array1.length; i++){
            for(let j = 0; j < array2.length; j++){
                if(array1[i] === array2[j]){
                    newArray.push(array1[i])
                }
            }
        }
        return newArray
    }

    console.log(commonElements(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

    let array3 = [1,2,3,4,5,6,7,8,9,10]

    function sumaPares(array3){
        let suma = 0
        for(let i = 0;i < array3.length; i++){
            if(array3[i] % 2 === 0)
                suma += array3[i]
        }
        return suma
    }

console.log(sumaPares(array3))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

    let array4 = [1,2,3,4,5,6,7,8,9,10]

    function square(array4){
        let newArray = []
        for(let i = 0; i < array4.length; i++){
            newArray.push(array4[i] ** 2)
        }
        return newArray
    }

    console.log(square(array4))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

    let cadena = "Hola JavaScript"

    function reverseWords(cadena){
        let words = cadena.split(" ")
        let reverseWords = words.reverse()
        return reverseWords.join(" ")
    }
    
    console.log(reverseWords(cadena))

// 10. Crea una función que calcule el factorial de un número dado

    function factorial(num){
        let result = 1
        for(let i = 1; i <= num; i++){
            result *= i
        }
        return result
    }

    console.log(factorial(2))