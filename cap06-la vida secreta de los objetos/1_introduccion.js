//LA VIDA SECRETA DE LOS OBJETOS

// La idea principal de la programación orientada a objetos (POO) es dividir los programas 
// en piezas más pequeñas (objetos) que son responsables de gestionar su propio estado.

// 1. MÉTODOS
// Los métodos son simplemente propiedades que contienen valores de función.
let conejo = {};
conejo.saludar = function (linea) {
  console.log(`El conejo dice: '${linea}'`);
};

conejo.saludar("Hola, estoy aprendiendo POO.");

// La palabra clave 'this' en un método apunta al objeto sobre el cual fue llamado.
function hablar(linea) {
  console.log(`El conejo ${this.tipo} dice: '${linea}'`);
}
let conejoBlanco = { tipo: "blanco", hablar };
conejoBlanco.hablar("¡Qué tarde es!"); // 'this' será conejoBlanco


// 2. PROTOTIPOS (PROTOTYPES)
// Casi todos los objetos tienen un prototipo: otro objeto que actúa como fuente de propiedades de respaldo.
// Si buscas una propiedad que el objeto no tiene, JS la buscará en su prototipo.
console.log(Object.getPrototypeOf({}) == Object.prototype); // → true

// Podemos crear objetos con un prototipo específico:
let prototipoConejo = {
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice: '${linea}'`);
  }
};
let conejoNegro = Object.create(prototipoConejo);
conejoNegro.tipo = "negro";
conejoNegro.hablar("Soy un objeto creado desde un prototipo.");


// 3. CLASES (CLASSES)
// En JavaScript moderno, la palabra clave 'class' hace que la creación de prototipos sea más clara.
class Conejo {
  constructor(tipo) {
    this.tipo = tipo; // Se ejecuta al usar 'new'
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice: '${linea}'`);
  }
}

let conejoHambriento = new Conejo("hambriento");


// 4. MIEMBROS PRIVADOS Y PRIVACIDAD
// Para evitar que el código exterior dependa de detalles internos, usamos '#'
// para definir propiedades o métodos que solo pueden usarse dentro de la clase.
class Termometro {
  #celsius; // Propiedad privada
  constructor(temp) {
    this.#celsius = temp;
  }
  get fahrenheit() {
    return this.#celsius * 1.8 + 32;
  }
  set fahrenheit(valor) {
    this.#celsius = (valor - 32) / 1.8;
  }
}


// 5. MAPAS (MAPS)
// Aunque los objetos planos se pueden usar para asociar claves con valores, 
// la clase 'Map' es mejor para este propósito porque permite cualquier tipo de clave.
let edades = new Map();
edades.set("Boris", 39);
console.log(edades.has("Boris")); // → true
console.log(edades.get("Boris")); // → 39


// 6. POLIMORFISMO
// Es la capacidad de diferentes tipos de objetos de responder a la misma interfaz.
// Por ejemplo, muchas clases pueden tener un método 'toString()', y el código que lo llama
// no necesita saber exactamente qué tipo de objeto está usando.


// 7. SÍMBOLOS (SYMBOLS)
// Los símbolos son valores únicos que pueden usarse como nombres de propiedades 
// para evitar colisiones con otros nombres.
const sym = Symbol("nombre");
let obj = { [sym]: "valor secreto" };
console.log(obj[sym]); // → "valor secreto"


// 8. EL INTERFAZ DE ITERADOR
// El símbolo Symbol.iterator define cómo se comporta un objeto en un bucle for/of.
// Muchos objetos integrados como Arrays y Strings ya lo tienen implementado.
let iterable = "ABC"[Symbol.iterator]();
console.log(iterable.next()); // → {value: "A", done: false}


// 9. HERENCIA
// Una clase puede heredar propiedades y métodos de otra clase.
class ConejoEspecial extends Conejo {
  constructor(tipo, poder) {
    super(tipo); // Llama al constructor de la clase padre (Conejo)
    this.poder = poder;
  }
}


// 10. EL OPERADOR instanceof
// Permite verificar si un objeto pertenece a una clase específica o a una que hereda de ella.
console.log(new ConejoEspecial("mago") instanceof Conejo); // → true