/*# EJERCICIOS – CAPÍTULO 5: FUNCIONES DE ORDEN SUPERIOR

//NIVEL 1 – INTRODUCCIÓN A CALLBACKS

/*
1.- Callbacks básicos
- Crea una función `ejecutar` que reciba una función y la ejecute
- Llama a `ejecutar` pasando una función que imprima "Hola"
*/

// TU CÓDIGO AQUÍ



/*
2.- Operaciones
- Crea una función `operar(a, b, accion)`
- `accion` debe ser una función
- Prueba sumando y restando usando funciones flecha
*/

// TU CÓDIGO AQUÍ




//NIVEL 2 – LOS ESTÁNDARES: MAP, FILTER, REDUCE

/*
3.- Filtrando pares
Dado el array de números, usa .filter() para obtener solo los pares
*/

let numeros = [1, 2, 3, 4, 5, 6];

// TU CÓDIGO AQUÍ



/*
4.- Transformando nombres
Dado el array de usuarios, usa .map() para obtener un array solo con los nombres en mayúsculas
*/

let usuarios = [
    { nombre: "ana", edad: 20 },
    { nombre: "luis", edad: 30 }
];

// TU CÓDIGO AQUÍ



/*
5.- Suma total
Usa .reduce() para obtener la suma de todos los números del ejercicio 3
*/

// TU CÓDIGO AQUÍ




//NIVEL 3 – EJERCICIOS DEL LIBRO (ELOQUENT JS)

/*
6.- Aplanamiento (Flattening)
Usa .reduce() y .concat() para convertir un array de arrays en un solo array plano.
Entrada: [[1, 2, 3], [4, 5], [6]]
Salida: [1, 2, 3, 4, 5, 6]
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

// TU CÓDIGO AQUÍ



/*
7.- Tu propio bucle (Your own loop)
Escribe una función de orden superior `bucle` que imite algo parecedo a un `for`.
Recibe:
- valor: valor inicial
- test: función que comprueba si debe seguir (como if)
- actualizacion: función que actualiza el valor
- cuerpo: función que se ejecuta en cada paso

bucle(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
*/

// TU CÓDIGO AQUÍ



/*
8.- Cada uno (Everything)
Implementa la función `cadaUno(array, test)` que se comporta como `.every()`.
- Debe devolver true solo si test devuelve true para TODOS los elementos.
- Haz dos versiones: una con bucle y otra con .some().
*/

function cadaUno(array, test) {
    // TU CÓDIGO AQUÍ
}




//NIVEL 4 – COMPOSICIÓN

/*
9.- Composición básica
Crea una función `mayorDeEdad(persona)` devuelve booleano.
Crea una funcion `formatoCorreo(persona)` devuelve string.
Usa .filter() y .map() encadenados para enviar correos solo a los mayores de edad.
*/

let personas = [
    { nombre: "A", edad: 15 },
    { nombre: "B", edad: 25 },
    { nombre: "C", edad: 35 }
];

// TU CÓDIGO AQUÍ
