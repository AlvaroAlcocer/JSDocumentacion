//En el mundo de las computadoras, todo es data. La información se almacena como secuencias de bits (0 y 1), 
//que representan dos estados posibles, como alto/bajo, encendido/apagado o brillante/opaco.
//Cualquier tipo de información puede convertirse en bits.
//Los números también se representan en binario. Igual que en decimal, cada posición tiene un valor, 
//pero en lugar de potencias de 10, se utilizan potencias de 2.
//Por ejemplo, el número decimal 13 en binario es 00001101, donde los bits activos (8, 4 y 1) suman 13.

//En este capítulo se presentan cuatro tipos básicos de valores en JavaScript:
// 1. Números:
//    Representan valores numéricos. Se pueden sumar, restar, dividir, etc.
// 2. Cadenas (Strings):
//    Representan texto. Se pueden concatenar y transformar.
// 3. Booleanos:
//    Valores lógicos: true o false. Se usan en condiciones.
// 4. undefined y null:
//    - undefined: valor no asignado.
//    - null: ausencia intencional de un valor.

//Los valores se crean escribiendo su valor directamente (13, "hola") o su nombre (true, null).

//Los operadores permiten combinar y transformar valores:
// Aritméticos:     +, -, *, /, %
// Comparación:      ==, !=, ===, !==, <, >, <=, >=
// Lógicos:          &&, ||, !, ??
// Texto:            +
// Tipo:             typeof
// Condicional:      condicion ? true : false  (operador ternario)

//¿QUÉ HACE CADA OPERADOR?
// ===  → igualdad estricta (mismo valor y mismo tipo)
// ==   → igualdad no estricta (convierte tipos, menos seguro)
// !    → negación lógica (invierte true/false)
// &&   → AND lógico (true solo si ambas expresiones son true)
// ||   → OR lógico (true si al menos una expresión es true)
// ??   → nullish coalescing (usa el primer valor que no sea null/undefined)
// typeof → devuelve el tipo de un valor



// NÚMEROS

console.log(10 + 5);     
// 15

console.log(10 / 3);     
// 3.333...

// Módulo (%) devuelve el residuo de una división
console.log(7 % 2);      
// 1 (porque 7 / 2 = 3 y sobra 1)


// STRINGS (Cadenas de texto)

// Concatenación de cadenas: une textos
console.log("Hola " + "mundo");  
// "Hola mundo"

// Propiedad .length: obtiene cuántos caracteres tiene un string
console.log("JS".length);        
// 2

// Método .toUpperCase(): convierte texto a mayúsculas
console.log("Hola".toUpperCase());  
// "HOLA"


// BOOLEANOS (true / false)

// && (AND lógico): solo es true si ambos valores son true
console.log(true && false);   
// false (porque una de las dos es false)

// || (OR lógico): es true si al menos uno es true
console.log(true || false);   
// true (basta con uno verdadero)

// ! (NOT lógico): invierte el valor booleano
console.log(!true);           
// false


// VALORES INDEFINIDOS

// undefined: variable declarada pero sin valor asignado
let x;
console.log(x);   
// undefined

// null: valor intencionalmente vacío (lo puso el programador)
let y = null;
console.log(y);   
// null


// typeof

// typeof muestra el tipo de un valor
console.log(typeof 42);        
// "number"

console.log(typeof "hola");    
// "string"

console.log(typeof true);      
// "boolean"

console.log(typeof undefined); 
// "undefined"


// OPERADOR TERNARIO (cond ? true : false)

// Es una forma corta de escribir un if/else
let edad = 18;
let mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);  
// "Mayor"


// OPERADORES DE COMPARACIÓN

// === igualdad estricta: compara valor y tipo
console.log(5 === "5");  
// false (number !== string)

// == igualdad no estricta: convierte tipos antes de comparar
console.log(5 == "5");   
// true (JavaScript convierte "5" a número)

// > mayor que
console.log(10 > 3);     
// true

// <= menor o igual
console.log(2 <= 1);     
// false
