/*# Ejercicios Joaco

## Ejercicio 1: Validador de Contraseña
Escribe un programa en JavaScript que solicite al usuario ingresar una contraseña hasta que sea correcta. Debes usar prompt()
para leer la entrada del usuario. Cuando la contraseña sea correcta, debes mostrar un mensaje de "Contraseña correcta" y también 
indicar cuántos intentos fallidos hubo antes de acertar.*/


let pass = prompt("Ingresa tu contraseña:");
let intentos = 0;

while (pass !== "Joacozzz"){
    intentos++;
    pass = prompt("Contraseña incorrecta. Inténtalo de nuevo:");
}

alert("Contraseña correcta. Intentos fallidos: " + intentos);


/*## Ejercicio 2: Adivina el Número (Con Pistas)
Crea un programa donde la computadora genere un número aleatorio entre 1 y 100. El usuario debe adivinar este número, teniendo 
intentos infinitos. En cada intento, el programa debe dar pistas según qué tan cerca esté del número secreto:

- *Muy caliente:* Si la diferencia es de 3 números o menos.
- *Caliente:* Si la diferencia es de 10 números o menos (pero más de 3).
- *Tibio:* Si la diferencia es de 20 números o menos (pero más de 10).
- *Frío:* En cualquier otro caso.

El programa debe validar que el usuario solo ingrese números entre 1 y 100. Si ingresa un número fuera de este rango, debes 
mostrar un error y pedir otro número.

*Requisitos técnicos:*
- Usar prompt() para entrada del usuario.
- Usar alert() o console.log() para mostrar mensajes.
- Generar números aleatorios con Math.random().*/

let secreto = Math.floor(Math.random()*100)+1;
let user = Number(prompt("Adivina el numero:"));
while(user !== secreto){
  if (Number.isNaN(user) || user<1 || user>100 ){
    alert("Error ingrese numeros validos");
    user = Number(prompt("Intenta de nuevo:"));
    continue;
  }
  let diff = Math.abs(user - secreto);
  
  if (diff <= 3){
    alert ("muy caliente:");
  }else if (diff <= 10){
    alert ("caliente:");
  }else if (diff <= 20){
    alert ("tibio:")
  }else {
    alert ("frio")
  }
  user = Number(prompt("Intenta de nuevo:")); 
}
alert ("Correcto");