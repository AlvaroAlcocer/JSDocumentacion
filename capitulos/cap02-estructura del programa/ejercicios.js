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