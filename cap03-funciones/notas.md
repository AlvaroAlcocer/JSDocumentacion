# 📘 Notas: Funciones en JavaScript

---

## 🛠️ **Formas de definir una función**

| Tipo | Sintaxis | ¿Tiene Hoisting? | Características |
| :--- | :--- | :--- | :--- |
| **Declaración** | `function hola() {}` | ✅ Sí | Se puede usar antes de definirla. |
| **Expresión** | `const hola = function() {}` | ❌ No | Se guarda en una variable. |
| **Flecha (Arrow)** | `const hola = () => {}` | ❌ No | Sintaxis corta, ideal para callbacks. |

---

## 🌍 **Ámbito (Scope)**

El "lugar" donde viven tus variables.

| Tipo de Scope | Descripción | ¿Desde dónde se accede? |
| :--- | :--- | :--- |
| **Global** | Fuera de cualquier función. | Desde cualquier lugar del código. |
| **Local** | Dentro de una función. | Solo dentro de esa función. |
| **Anidado** | Función dentro de otra. | Las hijas ven las variables de las madres. |

---

## 🔑 **Conceptos Clave**

| Concepto | Significado | Ejemplo |
| :--- | :--- | :--- |
| **Parámetro** | Variable en la definición. | `function ver(x) { ... }` ← `x` |
| **Argumento** | Valor real al llamar. | `ver(5)` ← `5` |
| **Return** | Devuelve un valor y rompe la función. | `return a + b;` |
| **Default Params** | Valor por defecto si falta el argumento. | `function (a = 10)` |
| **Closure** | Función que recuerda su entorno original. | Funciones creando funciones. |
| **HOF** | Funciones que reciben/devuelven funciones. | `repeat(3, log)` |

---

## ⚡ **Ejemplos Rápidos**

### **Flecha (Arrow Function)**
```javascript
// Si es una línea, el return es implícito
const doble = n => n * 2;
```

### **Closure**
```javascript
function crearSaludo(saludo) {
  return nombre => `${saludo}, ${nombre}`;
}
const decirHola = crearSaludo("Hola");
console.log(decirHola("Juan")); // "Hola, Juan"
```
