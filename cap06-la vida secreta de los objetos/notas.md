# 📘 Notas: La Vida Secreta de los Objetos

---

## 🚀 **Introducción a POO**

La idea principal de la **Programación Orientada a Objetos (POO)** es dividir los programas en piezas más pequeñas (**objetos**) que son responsables de gestionar su propio estado.

---

## 🛠️ **Métodos y `this`**

### **Métodos**
Son propiedades que contienen funciones.

```javascript
let conejo = {};
conejo.saludar = function(linea) {
  console.log(`El conejo dice: '${linea}'`);
};
```

### **`this`**
Apunta al objeto sobre el cual se llamó el método.

```javascript
function hablar(linea) {
  console.log(`El conejo ${this.tipo} dice: '${linea}'`);
}
```

---

## 🧬 **Prototipos y Clases**

### **Prototipos (Prototypes)**
Casi todos los objetos tienen un prototipo: otro objeto que actúa como fuente de propiedades de respaldo.
*   `Object.getPrototypeOf(obj)`: Obtiene el prototipo.
*   `Object.create(proto)`: Crea un objeto con un prototipo específico.

### **Clases (Classes)**
Sintaxis moderna para crear objetos con un constructor y métodos compartidos.

```javascript
class Conejo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice: '${linea}'`);
  }
}
```

---

## 🔒 **Encapsulamiento**

### **Miembros Privados**
Se usa `#` al inicio del nombre de la propiedad para hacerla privada (solo accesible dentro de la clase).

```javascript
class Termometro {
  #celsius;
  constructor(temp) {
    this.#celsius = temp;
  }
}
```

### **Getters y Setters**
Permiten leer (`get`) o escribir (`set`) propiedades ejecutando lógica, pareciendo propiedades normales desde fuera.

---

## ⚡ **Estructuras y Símbolos**

### **Mapas (Maps)**
Permiten usar **cualquier tipo de clave** (a diferencia de los objetos que solo usan strings/symbols).

```javascript
let edades = new Map();
edades.set("Boris", 39);
console.log(edades.get("Boris")); // → 39
```

### **Símbolos (Symbols)**
Valores únicos creados con `Symbol("desc")`. Útiles para propiedades que no colisionen con otras.

---

## 🧩 **Iteradores y Polimorfismo**

### **Iteradores**
El símbolo `Symbol.iterator` define cómo se comporta un objeto en un bucle `for/of`.
```javascript
let iterable = "OK"[Symbol.iterator]();
iterable.next(); // {value: "O", done: false}
```

### **Herencia**
Permite crear clases basadas en otras usando `extends`.
`super` llama al constructor o métodos de la clase padre.

### **Polimorfismo**
Capacidad de diferentes objetos (ej. array, string) de responder a la misma interfaz (ej. iterar, `toString`).

### **`instanceof`**
Verifica si un objeto es instancia de una clase.
```javascript
conejo instanceof Conejo // → true
```
