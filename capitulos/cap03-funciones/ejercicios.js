// -----------------------------------------------------------------------------
// 1. Saludo Personalizado
// Crea una función llamada 'saludar' que reciba un nombre como parámetro
// y devuelva un texto que diga "Hola, [nombre]!".
// Prueba la función con varios nombres.
function saludar(nombre) {
    return "hola, " + nombre;
}
console.log(saludar("Alex"));
console.log(saludar("Mateo"));
console.log(saludar("Maria"));
console.log(saludar("Andres"));


// -----------------------------------------------------------------------------
// 2. El Cuadrado de un Número
// Escribe una función llamada 'cuadrado' que reciba un número
// y devuelva ese número multiplicado por sí mismo.
// Ejemplo: cuadrado(5) debería devolver 25.
function cuadrado(numero) {
    return numero * numero
}
console.log(cuadrado(4))
console.log(cuadrado(5))


// -----------------------------------------------------------------------------
// 3. Calculadora de Área
// Crea una función 'areaRectangulo' que reciba 'base' y 'altura'.
// Debe devolver el área (base * altura).
// Si no se le pasa altura, debe asumir que es un cuadrado (altura = base). (Pista: usa parámetros por defecto).
function areaRectangulo(base, altura = base) {
    return base * altura;
}
console.log(areaRectangulo(2, 2));
console.log(areaRectangulo(2));



// -----------------------------------------------------------------------------
// 4. Conversión a Función Flecha
// Tienes la siguiente función normal. Rescríbela como función flecha (arrow function) en una sola línea.

/*
function multiplicar(a, b) {
    return a * b;
}
*/
const multiplicar = (a, b) => a * b;
console.log("multiplicar:", multiplicar(4, 2));



// -----------------------------------------------------------------------------
// 5. El Mínimo
// El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño.
// Nosotros podemos construir algo así. Escribe una función 'min' que tome dos argumentos
// y devuelva su mínimo.

// min(0, 10) -> 0
// min(0, -10) -> -10

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log("El minimo es:", min(5, 2));
console.log("El minimo es:", min(5, -6));


// -----------------------------------------------------------------------------
// 6. Recursión (Reto Extra)
// Hemos visto que % (el operador de resto) se puede usar para probar si un número es par o impar
// usando % 2 para ver si es divisible por dos.
// Aquí hay otra manera de definir si un número entero positivo es par o impar:
// - El cero es par.
// - El uno es impar.
// - Para cualquier otro número N, su paridad es la misma que N - 2.
// Define una función recursiva 'esPar' que corresponda a esta descripción.
// La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.
function esPar(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return esPar(n - 2);
    }
}
console.log("esPar:", esPar(2));
console.log("esPar:", esPar(3));

function esPar(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    return esPar(n - 2);
}
console.log(esPar(55));
console.log(esPar(60));


// -----------------------------------------------------------------------------
// 7. Contando Frijoles (Strings y Scope)
// Escribe una función 'contarBase' que tome un string como primer argumento,
// y un carácter como segundo argumento, y devuelva el número de veces que ese carácter
// aparece en el string. Usa un bucle for dentro de la función.

function contarBase(texto, caracter) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

console.log(contarBase("BBBBC", "B"));
console.log(contarBase("banana", "a"));



