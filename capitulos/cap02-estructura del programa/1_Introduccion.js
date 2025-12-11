//Estructura del Programa

//Un programa se construye con declaraciones
//Una declaración (statement) es una instrucción completa.
//Las declaraciones se ejecutan de arriba hacia abajo.
let y = 10;
console.log(y);

//Las declaraciones contienen expresiones
//Una expresión es un fragmento de código que produce un valor.
// - 5 + 3
// - "Hola"
// - x * 2
// - funcion()
//let resultado = 5 + 3; 
// 5 + 3 es una expresión

//Enlaces
//Los enlaces permiten guardar valores bajo un nombre para usarlos luego.

//let x = 5;
//const pi = 3.14;

//Un enlace no es el valor en sí, sino una referencia a ese valor.
//El entorno es el conjunto de todos los enlaces existentes en un momento dado.



//Control del flujo del programa

//Condicionales: if, else, switch
//Permiten ejecutar código solo si se cumple cierta condición.

// -------------------------------
//if/else: ejecuta un bloque SI la condición es verdadera
// -------------------------------

let edad = 18; // Variable que almacena un número

if (edad >= 18) {     
  console.log("Eres mayor de edad");
} else {                   // Se ejecuta si la condición anterior fue false
  console.log("Eres menor de edad");
}

// Ejemplo con else if (varias condiciones en orden)
let temperatura = 30;

if (temperatura > 35) {             
  console.log("Hace mucho calor");
} else if (temperatura > 20) {      // Se evalúa solo si lo de arriba fue false
  console.log("El clima es agradable");
} else {                            // Si todas son false
  console.log("Hace frío");
}

// -------------------------------
//switch: ejecuta un bloque según el valor de una expresión
// -------------------------------

let color = "rojo";

switch (color) { // switch compara el valor con cada "case"
  case "rojo":        // Si color === "rojo"
    console.log("Detente");
    break;            // break evita seguir evaluando más casos

  case "verde":       // Si color === "verde"
    console.log("Avanza");
    break;

  default:            // Si ninguno de los casos coinciden
    console.log("Color desconocido");
}

let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}

//Bucles: while, do while, for
//Sirven para repetir código.

// -------------------------------
//while:se ejecuta mientras la condición sea true
// -------------------------------

let i = 0; // Inicio del contador

while (i < 3) {        // i < 3 → se repite mientras sea verdadero
  console.log("Hola");
  i++;   // i++ significa "incrementa i en 1"
         // equivalente a: i = i + 1
}

// Ejemplo de cuenta regresiva
let cuenta = 5;

while (cuenta > 0) {
  console.log(cuenta);
  cuenta--; // cuenta-- significa "resta 1"
            // equivalente a: cuenta = cuenta - 1
}

console.log("Despegue");

// -------------------------------
//do while:ejecuta el bloque AL MENOS UNA VEZ
// -------------------------------

let a = 0;

do {
  console.log("Esto se ejecuta al menos una vez");
  a++; // suma 1 a la variable
} while (a < 1); // luego comprueba la condición


let numero = 0;

do {
  console.log("Intento:", numero);
  numero++; // aumenta el valor de numero
} while (numero < 3); // se repite mientras sea true

// -------------------------------
//for: se ejecuta un bloque un número determinado de veces
// -------------------------------

// for (inicio; condición; incremento)
for (let i = 0; i < 5; i++) {
  // i++ incrementa i de uno en uno en cada vuelta
  console.log("Número:", i);
}

// Ejemplo: sumar los números del 1 al 5
let suma = 0;

for (let n = 1; n <= 5; n++) { // n empieza en 1 y sube hasta 5
  suma += n; // suma += n es igual a: suma = suma + n
}

console.log("Suma total:", suma);