# 📘 Notas: Funciones de Orden Superior

---

## 🚀 **¿Qué son?**

Son funciones que operan sobre **otras funciones**, ya sea:
1.  **Recibiéndolas** como argumento.
2.  **Devolviéndolas** como resultado.

> **Abstracción:** Nos permiten abstraer *acciones* y *comportamientos*, no solo valores.

---

## 🛠️ **Métodos de Arrays (Fundamentales)**

Estas funciones recorren arrays y aplican una lógica a cada elemento.

| Método | ¿Qué hace? | ¿Modifica original? | Retorno |
| :--- | :--- | :--- | :--- |
| **`.filter(f)`** | Crea un nuevo array con elementos que pasan una prueba. | ❌ No | Nuevo Array (menor o igual tamaño). |
| **`.map(f)`** | Transforma cada elemento aplicando una función. | ❌ No | Nuevo Array (mismo tamaño). |
| **`.reduce(f, init)`** | "Reduce" todo el array a un único valor (suma, max, etc). | ❌ No | Un único valor. |
| **`.find(f)`** | Busca el **primer** elemento que cumpla la condición. | ❌ No | El elemento o `undefined`. |
| **`.some(f)`** | Comprueba si **alguno** cumple la condición. | ❌ No | `true` o `false`. |
| **`.every(f)`** | Comprueba si **todos** cumplen la condición. | ❌ No | `true` o `false`. |

---

## ⚡ **Ejemplos Rápidos**

### **Filter (Filtrar)**
```javascript
// Quedarse solo con los pares
[1, 2, 3, 4].filter(n => n % 2 === 0);
// → [2, 4]
```

### **Map (Transformar)**
```javascript
// Duplicar cada número
[1, 2, 3].map(n => n * 2);
// → [2, 4, 6]
```

### **Reduce (Resumir)**
```javascript
// Sumar todos los números
[1, 2, 3].reduce((a, b) => a + b, 0);
// → 6
```

---

## 🧩 **Composición**
El poder real viene al encadenar estos métodos como si fuera una tubería (*pipeline*).

```javascript
datos
  .filter(d => d.vivo)     // 1. Filtramos
  .map(d => d.edad)        // 2. Extraemos datos
  .reduce((a, b) => a + b) // 3. Procesamos
```

---

## 🔡 **Strings y Códigos**
JavaScript usa **UTF-16**. Ciertos caracteres (emojis) ocupan 2 espacios.

| Método | Descripción |
| :--- | :--- |
| `.codePointAt(i)` | Devuelve el código Unicode real del carácter. |
| `.charCodeAt(i)` | Devuelve el código de la unidad (puede ser incompleto). |
| `for (let c of s)` | Recorre correctamente por caracteres (incluyendo emojis). |
