//FUNCIONES

// -------------------------------
// 1. INTRODUCCIÓN
// -------------------------------
// Las funciones son el "pan de cada día" en JavaScript. Son bloques de código reutilizables
// que realizan una tarea específica.
// ¿Por qué usarlas?
// - Evitan repetir código (DRY: Don't Repeat Yourself).
// - Hacen el código más fácil de leer y entender.
// - Permiten dividir problemas grandes en partes pequeñas y manejables.

// -------------------------------
// 2. DEFINICIÓN DE FUNCIONES
// -------------------------------
// Hay tres formas principales de crear funciones en JavaScript moderno.

// 2.1. Declaración de Función (Function Declaration)
// Es la forma clásica. Una característica clave es el "hoisting" (elevación):
// puedes llamar a la función ANTES de haberla escrito en el código.

console.log(saludar("Mundo")); // Funciona gracias al hoisting

function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

// 2.2. Expresión de Función (Function Expression)
// Guardamos la función dentro de una variable.
// NO tienen hoisting: debes definirlas antes de usarlas.

const despedir = function (nombre) {
    return `Adiós, ${nombre}.`;
};

console.log(despedir("Amigo"));

// 2.3. Funciones Flecha (Arrow Functions) - Sintaxis moderna (ES6)
// Son más cortas y concisas. Muy usadas hoy en día.

const sumar = (a, b) => {
    return a + b;
};

// Si la función tiene una sola línea que retorna algo, podemos omitir llaves y 'return':
const multiplicar = (a, b) => a * b; // Return implícito

console.log("Suma:", sumar(5, 3));
console.log("Multiplicación:", multiplicar(4, 2));


// -------------------------------
// 3. PARÁMETROS Y ARGUMENTOS
// -------------------------------

// Parámetros: Variables listadas en la definición de la función.
// Argumentos: Los valores reales que pasamos al llamar la función.

// 3.1. Parámetros por Defecto (Default Parameters)
// Podemos asignar un valor inicial por si no nos pasan ese dato.

function potencia(base, exponente = 2) { // Si no dan exponente, usa 2
    return base ** exponente;
}

console.log("2 al cubo:", potencia(2, 3)); // 8
console.log("5 al cuadrado (por defecto):", potencia(5));   // 25


// -------------------------------
// 4. ÁMBITO (SCOPE)
// -------------------------------
// El "scope" define dónde son visibles tus variables.

let variableGlobal = "Soy visible en todos lados";

function pruebaScope() {
    let variableLocal = "Soy visible solo AQUÍ dentro";
    console.log(variableGlobal); // Funciona
    console.log(variableLocal);  // Funciona
}

pruebaScope();
// console.log(variableLocal); // ¡ERROR! variableLocal no existe fuera de la función.

// 4.1. Ámbito Anidado (Nested Scope)
// Las funciones pueden estar dentro de otras funciones.
// La función interna puede ver las variables de la externa.

function funcionExterna(x) {
    function funcionInterna(y) {
        return x + y; // Puede ver 'x' de la función padre
    }
    return funcionInterna(10);
}

console.log("Scope anidado:", funcionExterna(5)); // 15


// -------------------------------
// 5. CONCEPTOS AVANZADOS
// -------------------------------

// 5.1. Funciones de Orden Superior (Higher-Order Functions)
// Son funciones que operan sobre otras funciones, ya sea recibiéndolas como argumento
// o devolviéndolas.

function repetir(n, accion) {
    for (let i = 0; i < n; i++) {
        accion(i); // Ejecutamos la función que nos pasaron
    }
}

repetir(3, console.log); // Pasamos console.log como argumento


// 5.2. Cierres (Closures)
// Es una característica poderosa: una función "recuerda" el entorno donde fue creada,
// incluso después de que ese entorno haya dejado de ejecutarse.

function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const miContador = crearContador();
console.log("Contador:", miContador()); // 1
console.log("Contador:", miContador()); // 2
console.log("Contador:", miContador()); // 3
// La variable 'contador' sigue viva dentro del closure de 'miContador', protegida del exterior.


function crearMultiplicador(factor) {
    return numero => numero * factor;
}

const duplicar = crearMultiplicador(2);
console.log("Duplicar 10:", duplicar(10)); // 20
