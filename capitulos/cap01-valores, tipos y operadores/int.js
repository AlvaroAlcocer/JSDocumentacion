//En el mundo de las computadoras, todo es data. La información se almacena como secuencias de bits (0 y 1), 
//que representan dos estados posibles, como alto/bajo, encendido/apagado o brillante/opaco.
//Cualquier tipo de información puede convertirse en bits.
//Los números también se representan en binario. Igual que en decimal, cada posición tiene un valor, 
//pero en lugar de potencias de 10, se utilizan potencias de 2.
//Por ejemplo, el número decimal 13 en binario es 00001101, donde los bits activos (8, 4 y 1) suman 13.

//En este capítulo se presentan cuatro tipos básicos de valores en JavaScript:
//- Números
//- Cadenas de texto (strings)
//- Booleanos (true/false)
//- Valores indefinidos (null y undefined)

//Los valores se crean escribiendo su valor directamente (13, "hola") o su nombre (true, null).

//Los operadores permiten combinar y transformar valores:
//Aritmética: +, -, *, /, %
//Concatenación de cadenas: +
//Comparación: ==, !=, ===, !==, <, >, <=, >=
//Lógica: &&, ||, ??

//Operadores unarios: 
//-    (negación numérica)
//!    (negación lógica)
//typeof  (tipo del valor)

//Operador ternario:
//condicion ? valorSiTrue : valorSiFalse


//Números
console.log(10 + 5);     
// 15
console.log(10 / 3);     
// 3.333...
console.log(7 % 2);      
// 1 (residuo)

//Strings
console.log("Hola " + "mundo");  
// "Hola mundo"
console.log("JS".length);        
// 2
console.log("Hola".toUpperCase());  
// "HOLA"

//Booleanos
console.log(true && false);   
// false
console.log(true || false);   
// true
console.log(!true);           
// false
