// ESTRUCTURAS DE DATOS: OBJETOS Y ARRAYS

// Los números, booleanos y cadenas son los átomos de los datos.
// Pero para representar información compleja, necesitamos agrupar estos átomos en estructuras.
// JavaScript usa principalmente ARRAYS y OBJETOS para este propósito.


// 1. ARRAYS (CONJUNTOS DE DATOS)
// JavaScript proporciona un tipo de dato específico para almacenar secuencias de valores.
// Se escribe como una lista de valores entre corchetes, separados por comas.
let listaDeNumeros = [2, 3, 5, 7, 11];

// El primer índice es cero, no uno.
// El índice indica cuántos elementos se omiten desde el inicio.
console.log(listaDeNumeros[0]);        // → 2
console.log(listaDeNumeros.length);    // Cantidad de elementos del array

// Los arrays son un tipo especial de objeto
console.log(typeof listaDeNumeros);    // → "object"


// MÉTODOS DE ARRAYS (Funciones que manipulan la estructura)
let secuencia = [1, 2, 3];
secuencia.push(4);          // Agrega valores al final del array
secuencia.pop();            // Elimina el último valor y lo devuelve

// push y pop son típicos de una "pila" (LIFO)
let tareas = ["lavar"];
tareas.unshift("comprar"); // Agrega al inicio del array
tareas.shift();            // Elimina y devuelve el primer elemento

// Búsqueda y sub-secciones
console.log([1, 2, 3, 2, 1].indexOf(2));      // Primer índice encontrado
console.log([1, 2, 3, 2, 1].lastIndexOf(2));  // Último índice encontrado
console.log([0, 1, 2, 3, 4].slice(2, 4));     // Copia parcial (2 incluido, 4 excluido)

// Otros métodos comunes
console.log([1, 2, 3].includes(2));           // true si el valor existe
console.log([1, 2].concat([3, 4]));           // Une arrays y devuelve uno nuevo


// 2. OBJETOS
// Los valores de tipo 'object' son colecciones de propiedades (clave : valor).
// Permiten representar datos complejos y estructuras anidadas.
let dia1 = {
  ardilla: false,
  eventos: ["trabajo", "pizza", "correr"]
};

// Acceso a propiedades:
// - Notación de punto: para nombres válidos
// - Notación de corchetes: permite usar strings y variables
console.log(dia1.ardilla);
console.log(dia1["eventos"]);

// Manipulación de propiedades
dia1.lobo = false;               // Crea o modifica una propiedad
delete dia1.lobo;                // Elimina una propiedad

console.log("ardilla" in dia1);  // Verifica si la propiedad existe
console.log(Object.keys(dia1));  // Devuelve un array con las claves del objeto


// OBJETOS Y ARRAYS ANIDADOS
// En la vida real los datos suelen combinar ambas estructuras
let diario = [
  { eventos: ["trabajo", "tocar guitarra"], ardilla: false },
  { eventos: ["pizza", "televisión"], ardilla: true }
];


// 3. MUTABILIDAD E IDENTIDAD
// Los valores primitivos son inmutables.
// Los objetos y arrays son mutables y se comparan por referencia.
let objeto1 = { valor: 10 };
let objeto2 = objeto1;         // Misma referencia
let objeto3 = { valor: 10 };   // Objeto diferente

console.log(objeto1 === objeto2); // → true
console.log(objeto1 === objeto3); // → false

// Cambiar un objeto afecta a todas las referencias
objeto1.valor = 20;
console.log(objeto2.valor);      // → 20


// 4. STRINGS (NO SON ARRAYS)
// Aunque tienen métodos similares, los strings son inmutables.
let texto = "Hola mundo";

console.log(texto.slice(0, 4));     // "Hola"
console.log("  hola \n".trim());    // Elimina espacios y saltos
console.log("6".padStart(3, "0"));  // "006"

// Conversión entre strings y arrays
let palabras = "Hola mundo".split(" ");
console.log(palabras.join(". "));   // "Hola. mundo"

// Los strings pueden recorrerse con for...of
for (let letra of "Hola") {
  console.log(letra);
}


// 5. RECORRER ESTRUCTURAS
// for...of recorre valores (arrays, strings, etc.)
for (let elemento of [10, 20, 30]) {
  console.log(elemento);
}


// 6. FUNCIONES Y DATOS FLEXIBLES
// Parámetros Rest (...): agrupan argumentos en un array
function maximo(...numeros) {
  let resultado = -Infinity;
  for (let n of numeros) {
    if (n > resultado) resultado = n;
  }
  return resultado;
}

console.log(maximo(4, 1, 9, -2));


// Desestructuración de arrays y objetos
let [primero, segundo] = [10, 20];
let { nombre } = { nombre: "Jacques", edad: 23 };


// 7. JSON (JavaScript Object Notation)
// Formato de texto para almacenar o transmitir datos.
// Los nombres de propiedades siempre van entre comillas dobles.
let textoJSON = JSON.stringify({
  ardilla: false,
  eventos: ["pizza"]
});

let objetoJS = JSON.parse(textoJSON);


// 8. EL OBJETO Math
// Espacio de nombres para funciones matemáticas
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.floor(2.8));
console.log(Math.random());      // Número entre 0 y 1
console.log(Math.floor(Math.random() * 10)); // Entero 0–9
