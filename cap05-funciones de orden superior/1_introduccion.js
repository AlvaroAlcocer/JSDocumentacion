//FUNCIONES DE ORDEN SUPERIOR

// La complejidad es la principal causa de errores en programas grandes.
// Las abstracciones nos permiten ocultar detalles irrelevantes y pensar
// en el problema a un nivel más alto, usando un lenguaje más expresivo.


// 1. DEFINICIÓN
// Las funciones que operan sobre otras funciones (tomándolas como argumentos
// o devolviéndolas) se llaman FUNCIONES DE ORDEN SUPERIOR.
// Permiten abstraer sobre COMPORTAMIENTOS, no solo sobre valores.


// EJEMPLO: Crear nuevas funciones (funciones que devuelven funciones)
function mayorQue(n) {
    return m => m > n; // Devuelve una función personalizada
}

let mayorQue10 = mayorQue(10);
console.log(mayorQue10(11)); // → true
console.log(mayorQue10(7));  // → false


// EJEMPLO: Cambiar el flujo de control
// En lugar de escribir siempre el mismo bucle,
// pasamos la acción como función.
function repetir(n, accion) {
    for (let i = 0; i < n; i++) {
        accion(i);
    }
}

repetir(3, console.log); // → 0, 1, 2


// 2. ABSTRACCIÓN DE CONTROL
// Las funciones de orden superior permiten reemplazar
// patrones repetidos como bucles manuales.

function aMenosQue(condicion, accion) {
    if (!condicion) {
        accion();
    }
}

aMenosQue(false, () => {
    console.log("La condición era falsa");
});


// 3. MÉTODOS DE ARRAYS (FUNDAMENTALES)
// JavaScript incluye métodos estándar que implementan
// patrones comunes de funciones de orden superior.


// A. FILTER (Filtrado)
// Construye un NUEVO array con los elementos que pasan una prueba.
// No modifica el array original.
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(n => n % 2 === 0);

console.log(pares);   // → [2, 4]
console.log(numeros); // → [1, 2, 3, 4, 5]


// B. MAP (Transformación)
// Transforma cada elemento del array aplicando una función.
// El nuevo array tiene la misma longitud.
let nombres = ["adlam", "arabe"];
let mayusculas = nombres.map(s => s.toUpperCase());

console.log(mayusculas); // → ["ADLAM", "ARABE"]


// C. REDUCE (Resumen)
// Reduce un array a un único valor.
// Recibe una función acumuladora y un valor inicial.
let suma = [1, 2, 3, 4].reduce((a, b) => a + b, 0);

console.log(suma); // → 10


// D. FIND, SOME y EVERY
// find: Devuelve el PRIMER elemento que cumple la condición.
// some: true si AL MENOS uno cumple.
// every: true si TODOS cumplen.
let scripts = [
    { name: "Latin", living: true, year: -700 },
    { name: "Coptic", living: false, year: -200 }
];

console.log(scripts.find(s => !s.living));
console.log(scripts.some(s => s.name === "Han"));
console.log(scripts.every(s => typeof s.name === "string"));


// 4. COMPOSICIÓN Y PIPELINES
// El poder real aparece al COMBINAR funciones de orden superior.
// El código se puede leer como una "tubería" de procesamiento.

let totalAñosScriptsVivos = scripts
    .filter(s => s.living)        // 1. Filtrar
    .map(s => s.year)             // 2. Transformar
    .reduce((a, b) => a + b, 0);  // 3. Reducir

console.log(totalAñosScriptsVivos);


// 5. FUNCIONES COMO VALORES
// Las funciones son valores normales:
// - Se pueden guardar en variables
// - Pasar como argumentos
// - Devolver desde otras funciones

function ruido(f) {
    return (...args) => {
        console.log("Llamando con", args);
        let resultado = f(...args);
        console.log("Resultado:", resultado);
        return resultado;
    };
}

let ruidosa = ruido(Math.min);
ruidosa(3, 2, 1);


// 6. CARACTERES Y UNIDADES DE CÓDIGO (UTF-16)
// JavaScript usa UTF-16 internamente.
// Algunos caracteres usan DOS unidades de código.

let caballo = "🐴";

console.log(caballo.length);         // → 2 (unidades de código)
console.log(caballo.charCodeAt(0));  // → 55357 (unidad incompleta)
console.log(caballo.codePointAt(0)); // → 128052 (código Unicode real)


// Para recorrer caracteres reales correctamente, usar for...of
for (let char of "🌹🐉") {
    console.log(char);
}


// 7. SERIALIZACIÓN (REPASO)
// Para trabajar con datos reales, a menudo se usan formatos de texto.
// JSON permite convertir entre texto y estructuras JavaScript.

let datos = {
    nombre: "Alex",
    activo: true,
    puntaje: [10, 20, 30]
};

let textoJSON = JSON.stringify(datos);
let objetoJS = JSON.parse(textoJSON);

console.log(objetoJS);
