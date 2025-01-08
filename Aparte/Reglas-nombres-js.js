// 1. Caracteres permitidos:

// Los nombres de variables pueden incluir letras, dígitos, el signo de dólar $ y guiones bajos _, pero no pueden comenzar con un dígito.

// Válidos
let nombreUsuarios = 'Juan'; // --> se le agrego la s al final xq otras varible tiene l mismo nombre
let $elemento = document.getElementById('id');
let _contador = 5;

// Inválido: comienza con un dígito
// let 1variable = 'valor'; // Esto causará un error


// 2. Sensibilidad a mayúsculas y minúsculas:

// JavaScript distingue entre mayúsculas y minúsculas, por lo que variable, Variable y VARIABLE son nombres diferentes.

let edad = 25;
let Edad = 30;
let EDAD = 35;

console.log(edad); // 25
console.log(Edad); // 30
console.log(EDAD); // 35


// 3. Palabras reservadas:

// No se deben utilizar palabras clave reservadas de JavaScript como nombres de variables.

// Inválido: 'return' es una palabra reservada
// let return = 5; // Esto causará un error

// Válido
let retorno = 5;


// 4. Nombres descriptivos:

// Asigne nombres que reflejen claramente el propósito de la variable.

// Poco descriptivo
let x = 10;

// Descriptivo
let numeroDeProductos = 10;


// 5. Notación camelCase:

// Es una convención común en JavaScript utilizar camelCase para nombrar variables

let nombreCompleto = 'Ana Pérez';
let totalDeVentasAnuales = 100000;

// 6. Evitar abreviaturas ambiguas:

// Es preferible escribir nombres completos y claros en lugar de abreviaturas que puedan ser confusas

// Poco claro
let n = 5;

// Claro
let numeroDeIntentos = 5;


// 7. Consistencia:

// Mantenga un estilo de nomenclatura consistente en todo el código para mejorar la legibilidad y el mantenimiento.


// Inconsistente
let nombre_usuario = 'Carlos';
let ApellidoUsuario = 'García';

// Consistente
let nombreUsuario = 'Carlos';
let apellidoUsuario = 'García';

// Booleanos: Prefije las variables booleanas con is, are o has para indicar claramente que contienen valores verdaderos o falsos.

let isActivo = true;
let hasPermiso = false;


// Nombres de funciones:

// Utilice verbos que describan la acción que realiza la función, comenzando con una letra minúscula y siguiendo la notación camelCase.

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
    }

    // Nombres de clases:

    // Las clases deben nombrarse utilizando PascalCase, donde cada palabra comienza con una letra mayúscula, para diferenciarlas de otras entidades.

    class UsuarioRegistrado {
        constructor(nombre, email) {
            this.nombre = nombre;
            this.email = email;
        }
    }
    


//     Constantes:

// Para valores que no cambian, es común utilizar letras mayúsculas y guiones bajos para separar palabras, siguiendo la convención de snake_case en mayúsculas.

const MAXIMO_INTENTOS = 5;
const URL_BASE_API = 'https://api.ejemplo.com/';


// Actualización constante: Mantenga los comentarios sincronizados con el código.
//  Comentarios desactualizados pueden inducir a errores y confusión.

// Uso de JSDoc para documentación estructurada: Para funciones, métodos o clases, emplee comentarios JSDoc,
//  que permiten generar documentación automática y facilitan la comprensión del código.

/**
 * Calcula el área de un círculo.
 * @param {number} radio - El radio del círculo.
 * @returns {number} El área del círculo.
 */
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}


// Kebab case, también conocido como "kebab-case", es una convención de nomenclatura en la que las palabras se escriben en minúsculas y se separan por guiones (-). Este estilo se utiliza comúnmente en URLs y nombres de archivos para mejorar la legibilidad.

// Ejemplos de kebab case:

nombre-de-archivo.txt
mi-nueva-aplicacion
pagina-principal.html



