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

/*## 📊 *EJERCICIO 1: GENERADOR DE TABLAS DE MULTIPLICAR*

### *Enunciado:*
Escribe un programa en JavaScript que muestre *todas las tablas de multiplicar del 1 al 10, cada una en su propia sección. El programa debe usar **dos bucles for anidados* (uno dentro del otro).

### *Cómo debe verse el resultado:*

=== Tabla del 1 ===
1 × 1 = 1
1 × 2 = 2
1 × 3 = 3
1 × 4 = 4
1 × 5 = 5
1 × 6 = 6
1 × 7 = 7
1 × 8 = 8
1 × 9 = 9
1 × 10 = 10

=== Tabla del 2 ===
2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
... (y así sucesivamente)


*Requisitos:*
- Usar exactamente 2 bucles for anidados
- Mostrar todas las tablas del 1 al 10
- Cada tabla debe tener un título claro
- Usar console.log() para mostrar los resultados*/

for (let i=1; i<=10; i++){
  console.log(`1 x ${i} = ${1*i}`);
}

for (let i=1; i<=10; i++){
  console.log(`2 x ${i} = ${2*i}`);
}

/*## 📅 *EJERCICIO 2: CALENDARIO SEMANAL SIMPLE*

### *Enunciado:*
Crea un programa que organice los días del mes (del 1 al 31) en semanas de 7 días cada una. Debes usar *dos bucles for anidados*.

### *Cómo debe verse el resultado:*

Semana 1:  1  2  3  4  5  6  7
Semana 2:  8  9 10 11 12 13 14
Semana 3: 15 16 17 18 19 20 21
Semana 4: 22 23 24 25 26 27 28
Semana 5: 29 30 31


*Requisitos:*
- Mostrar 5 semanas máximo (para 31 días)
- Cada semana debe tener su número
- Los días deben alinearse en columnas
- Considerar que la última semana puede tener menos de 7 días*/

let dia_actual = 1;
for (let semana = 1; semana <= 5; semana++) {
  let texto = `Semana ${semana}: `;
  for (let dia = 1; dia <= 7; dia++) {
    if (dia_actual > 31) break;
    texto += dia_actual + " ";
    dia_actual++;
  }
  console.log(texto);
}