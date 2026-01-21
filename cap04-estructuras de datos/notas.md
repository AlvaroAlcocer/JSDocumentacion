# 📘 Notas: Estructuras de Datos (Objetos y Arrays)

---

## 📦 **Arrays (Arreglos)**
Listas ordenadas de valores.

| Operación | Método/Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| **Longitud** | `.length` | Cantidad de elementos. | `[1,2].length` → `2` |
| **Agregar Final** | `.push(x)` | Añade al final. | `arr.push(3)` |
| **Quitar Final** | `.pop()` | Elimina y devuelve el último. | `arr.pop()` |
| **Agregar Inicio** | `.unshift(x)` | Añade al principio. | `arr.unshift(0)` |
| **Quitar Inicio** | `.shift()` | Elimina y devuelve el primero. | `arr.shift()` |
| **Cortar** | `.slice(ini, fin)` | Copia una parte del array. | `arr.slice(0, 2)` |
| **Buscar** | `.indexOf(x)` | Índice del elemento (o -1). | `arr.indexOf("a")` |

---

## 🔑 **Objetos**
Colecciones de propiedades (clave: valor).

```javascript
let gato = {
  nombre: "Michi",
  vidas: 7
};
```

| Acción | Sintaxis | Nota |
| :--- | :--- | :--- |
| **Acceso (Punto)** | `obj.prop` | Para nombres simples. |
| **Acceso (Corchetes)** | `obj["prop"]` | Para nombres dinámicos o con espacios. |
| **Eliminar** | `delete obj.prop` | Borra la propiedad. |
| **Claves** | `Object.keys(obj)` | Devuelve array de claves. |

---

## 🔄 **Mutabilidad**

| Tipo | Comportamiento | Ejemplo |
| :--- | :--- | :--- |
| **Primitivos** | Inmutables (Copia por valor). | `let a = 10; let b = a;` |
| **Objetos/Arrays** | Mutables (Copia por referencia). | `let a = {x:1}; let b = a;` |
| **Identidad** | Comparación de memoria. | `{a:1} === {a:1}` es `false`. |

---

## 🧵 **Strings (Cadenas)**
No son arrays, pero se parecen. Son **inmutables**.

| Método | Descripción |
| :--- | :--- |
| `.trim()` | Quita espacios al inicio y final. |
| `.split(" ")` | Divide el string en un array. |
| `.join(" ")` | Un array se une en un string. |
| `.repeat(n)` | Repite el string n veces. |

---

## 💾 **JSON y Math**

| Objeto | Función | Descripción |
| :--- | :--- | :--- |
| **JSON** | `JSON.stringify()` | Convierte objeto JS a Texto JSON. |
| **JSON** | `JSON.parse()` | Convierte Texto JSON a objeto JS. |
| **Math** | `Math.random()` | Número aleatorio entre 0 y 1. |
| **Math** | `Math.floor()` | Redondea hacia abajo. |
| **Math** | `Math.max(...)` | Devuelve el valor más alto. |
