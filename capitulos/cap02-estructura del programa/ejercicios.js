//1. Saludo según la hora

//Pide una variable hora (número entre 0 y 23) y muestra:

//"Buenos días" si es menor a 12

//"Buenas tardes" si está entre 12 y 18

// "Buenas noches" si es mayor a 18

let hora = 6;

if (hora < 12){
    console.log("buenos días");
}else if (hora <= 12 && hora <= 18){
    console.log("buenas tardes");
}else (hora < 18)
    console.log ("buenas noches");

//2. Número par o impar
//Dado un número n, muestra si es:

//"Par"

//"Impar"

//(Sin usar %, si quieres un reto extra.)

let n = 44;

if (n%2 === 0){
    console.log("par");
}else (n%2 !== 0)
    console.log("impar");

let number = 777;
 if (Math.floor(number / 2) * 2 === number) {
    console.log("Par");
 } else {
    console.log("Impar");
 }

//3. Contar del 1 al 10

//Usa un while, for y do while para imprimir los números del 1 al 10.

let i = 0;

while (i<=10){
  console.log(i);
  i++
}

for(i=0; i<=10; i++){
  console.log(i)
}

let c = 0;

do{
    console.log(c);
    c++
}while(c<=10);

//4. Cuenta regresiva

//Imprimir desde 10 hasta 0 usando un for.

for (i=10; i>=0; i--){
    console.log(i);
}

//5. Tabla del 5

//Usa un for para imprimir:

//5 x 1 = 5
//5 x 2 = 10
//........
//5 x 10 = 50

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

/////////////////////////////////////////////////////

//1.-Contador simple: Usa un bucle for para imprimir los números del 1 al 10, cada uno en una línea.
for (let i = 1; i <= 10; i++){
  console.log(i)
}
//2.-Números impares: Escribe un bucle while que imprima todos los números impares entre 1 y 50.
let j=1;
while (j <= 50){
  if (j % 2 !== 0){
    console.log(j);   
  }
  j++;
}

//3.-Cuenta regresiva: Crea un bucle for que empiece en 20 y llegue a 0, mostrando solo los múltiplos de 3.
for (let m = 20; m >= 0; m--) {
  if (m % 3 === 0) {
    console.log(m);
  }
}


//4.-Suma de enteros: Usa un bucle for para sumar los números del 1 al 100 y mostrar el resultado total.
let suma=0;
for (let e = 1; e <=100; e++){
  suma += e
}
console.log(suma)

//5.-Potencias de 2: Escribe un bucle while que imprima todas las potencias de 2 menores o iguales a 1024.
let pot = 1
while (pot<=1024){
  console.log(pot);
  pot *=2 
}
  
//6.-Tabla de multiplicar: Usa un bucle for para mostrar la tabla del 7, del 1 al 10.
let mul = 7
for (let n = 1; n <= 10; n++){
  console.log(mul * n);
}

//7.-Contador de letras: Dada una cadena fija, recórrela con un for y cuenta cuántas veces aparece la letra “a”.
let texto = "base environment for this chapter";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === "a") {
    contador++;
  }
}

console.log(contador);

//8.-Triángulo de caracteres: Con un bucle for, imprime una figura de este tipo:

//#
//##
//###
//####
//#####

let filas = 5;

for (let i = 1; i <= filas; i++) {
  let fila = "";
  for (let j = 0; j < i; j++) {
    fila += "#";
  }
  console.log(fila);
}

//9.-Números saltados: Usa un bucle for que imprima los números del 1 al 50, pero salte (con continue) los divisibles por 5.

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

//10.-Acumulador hasta cierto valor: Usa un while que vaya sumando números consecutivos hasta que la suma total sea mayor a 1000, y muestra cuántos números fueron sumados.

let sumaTotal = 0;
let contadorNumeros = 0;
let numero = 1;
while (sumaTotal <= 1000) {
  sumaTotal += numero;
  contadorNumeros++;
  numero++;
}
console.log(`Se sumaron ${contadorNumeros} números.`);