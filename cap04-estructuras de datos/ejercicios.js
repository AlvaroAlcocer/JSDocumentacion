/*# EJERCICIOS – CAPÍTULO 4  

//NIVEL 1 – FUNDAMENTOS

/*
1.-Acceso a arrays
Dado el array:
- Muestra el primer elemento
- Muestra el último elemento
- Muestra la cantidad de elementos
*/

let numeros = [10, 20, 30, 40, 50];

// TU CÓDIGO AQUÍ



/*
2.- Modificar un array
Realiza las siguientes acciones en orden:
1. Agrega "dormir" al final
2. Agrega "despertar" al inicio
3. Elimina el último elemento
4. Elimina el primero
Muestra el array final
*/

let tareas = ["estudiar", "comer"];

// TU CÓDIGO AQUÍ



/*
3.- Buscar elementos
- Encuentra el índice de la primera "b"
- Encuentra el índice de la última "b"
- Verifica si existe "z"
*/

let letras = ["a", "b", "c", "b"];

// TU CÓDIGO AQUÍ




//NIVEL 2 – OBJETOS Y ESTRUCTURAS

/*
4.- Acceso y modificación de objetos
- Muestra el nombre usando notación punto
- Muestra la edad usando notación corchetes
- Agrega la propiedad ciudad
- Elimina la propiedad edad
- Muestra todas las claves del objeto
*/

let persona = {
    nombre: "Alex",
    edad: 20
};

// TU CÓDIGO AQUÍ



/*
5.- Objetos anidados
- Muestra la ciudad
- Cambia la zona
- Agrega número de casa dentro de direccion
*/

let usuario = {
    nombre: "Lucia",
    direccion: {
        ciudad: "La Paz",
        zona: "Sur"
    }
};

// TU CÓDIGO AQUÍ



/*
6.- Arrays de objetos
- Muestra el nombre del segundo producto
- Cambia el precio del monitor
- Agrega un nuevo producto
*/

let productos = [
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 900 }
];

// TU CÓDIGO AQUÍ




//NIVEL 3 – MUTABILIDAD E IDENTIDAD

/*
7.- Referencias
- Cambia b.valor
- Muestra a.valor
- Compara a === b
- Compara a === c
- Explica por qué sucede esto (comentario)
*/

let a = { valor: 1 };
let b = a;
let c = { valor: 1 };

// TU CÓDIGO AQUÍ



/*
8.- Copia vs referencia
- Modifica copia
- Muestra original
- Crea una copia real usando slice()
*/

let original = [1, 2, 3];
let copia = original;

// TU CÓDIGO AQUÍ



//NIVEL 4 – STRINGS Y ARRAYS

/*
9.- Strings a arrays
- Convierte el string en array de palabras
- Convierte el array en string usando "-"
*/

let frase = "JavaScript es genial";

// TU CÓDIGO AQUÍ



/*
10.- Recorrer strings
- Recorre el string usando for...of
- Muestra cada letra
*/

let palabra = "Hola";

// TU CÓDIGO AQUÍ



//NIVEL 5 – CONCEPTOS CLAVE DEL CAPÍTULO

/*
11.- Comparación profunda
Explica por qué esto es false (comentario)
{a:1} === {a:1}
*/

// TU EXPLICACIÓN AQUÍ



/*
12.- Contar propiedades
Crea una función contarPropiedades(obj)
Devuelve cuántas propiedades tiene
*/

function contarPropiedades(obj) {
    // TU CÓDIGO AQUÍ
}



/*
13.- RETO FINAL – deepEqual
Crea una función deepEqual(a, b)
- Devuelve true si tienen el mismo contenido
- Funciona con objetos simples
*/

function deepEqual(a, b) {
    // TU CÓDIGO AQUÍ
}
