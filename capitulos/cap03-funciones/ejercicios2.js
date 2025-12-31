//Jochicicios
//1.Factorial con recursividad
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//2.Potencia con recursividad

function potencia(base, exponente) {
  if (exponente === 0) return 1;
  return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3));


//3.Convertir texto a un array de caracteres

function convertirTexto(texto) {
  return texto.split("");
}
console.log(convertirTexto("hola"));

//4. Generador de numeros aleatorios por rango

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generarNumeroAleatorio(1, 10));

//5. Conjetura de Collatz (for y recursiva para mayor reto)

function conjeturaCollatz(n) {
  if (n === 1) return 1;
  if (n % 2 === 0) return conjeturaCollatz(n / 2);
  return conjeturaCollatz(3 * n + 1);
}
console.log(conjeturaCollatz(5));

//6. Serie de fibonacci (for y recursiva para mayor reto)

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

//7. Numero a binario

function numeroABinario(numero) {
  return numero.toString(2);
}
console.log(numeroABinario(5));

//8. Binario a numero

function binarioANumero(binario) {
  return parseInt(binario, 2);
}
console.log(binarioANumero("101"));

//9. Numero a hexadecimal

function numeroAHexadecimal(numero) {
  return numero.toString(16);
}
console.log(numeroAHexadecimal(5));

//10. Conversor de segundos a horas y viceversa

function segundosAHoras(segundos) {
  return segundos / 3600;
}
console.log(segundosAHoras(3600));

//12. Teorema de pitagoras

function teoremaDePitagoras(cateto1, cateto2) {
  return Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
}
console.log(teoremaDePitagoras(3, 4));

//13. Imprima digitos de numero (usando logaritmos o operaciones matematicas)

function imprimirDigitos(numero) {
  return numero.toString().split("").map(Number);
}
console.log(imprimirDigitos(12345));

//14. Formula general

function formulaGeneral(a, b, c) {
  return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}
console.log(formulaGeneral(1, 2, 3));

//15. Multiplicacion y division (solo suma o resta)

function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}
console.log(multiplicar(2, 3));

//16. Banco calcule el cambio de una compra, solo billetes de 100, 50,20,10,5,2,1

function calcularCambio(precio, dinero) {
  let cambio = dinero - precio;
  let billetes = [100, 50, 20, 10, 5, 2, 1];
  let resultado = [];
  for (let i = 0; i < billetes.length; i++) {
    let cantidad = Math.floor(cambio / billetes[i]);
    if (cantidad > 0) {
      resultado.push({ billete: billetes[i], cantidad: cantidad });
      cambio -= cantidad * billetes[i];
    }
  }
  return resultado;
}
console.log(calcularCambio(100, 200));

//17. contador con closure

function contador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  }
}
let contador1 = contador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

//18. closure de cuenta bancaria (devulve un objeto con metodos)

function cuentaBancaria() {
  let saldo = 0;
  return {
    depositar: function (monto) {
      saldo += monto;
      return saldo;
    },
    retirar: function (monto) {
      saldo -= monto;
      return saldo;
    },
    getSaldo: function () {
      return saldo;
    }
  }
}
let cuenta = cuentaBancaria();
console.log(cuenta.depositar(100));
console.log(cuenta.retirar(50));
console.log(cuenta.getSaldo());