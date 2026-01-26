# 📘 Notas: Errores y Bugs

---

## 🐞 **Introducción**

El proceso de encontrar errores en los programas se llama **depuración (debugging)**.
Los errores pueden ser de sintaxis, de lógica o por supuestos incorrectos sobre el entorno.

---

## 🚧 **Modo Estricto**

JavaScript se puede volver más estricto usando `"use strict"`. Esto ayuda a detectar errores comunes, como asignar valores a variables no declaradas.

```javascript
function modoEstricto() {
    "use strict";
    // for (let i = 0; i < 10; i++) // Olvidar 'let' daría error aquí
}
```

---

## 🏷️ **Tipado**

Como JavaScript no verifica tipos antes de ejecutar, los errores suelen aparecer tarde.
*   Usar comentarios claros.
*   Usar herramientas como **TypeScript**.

---

## 🧪 **Pruebas (Testing)**

Escribir pruebas automatizadas ayuda a verificar que el código haga lo que esperas.

```javascript
function test(nombre, etiqueta) {
    if (!etiqueta) console.log(`FALLÓ: ${nombre}`);
}

test("Conversión a mayúsculas", "hola".toUpperCase() == "HOLA");
```

---

## 🔍 **Depuración**

*   **`console.log`**: Para ver qué pasa en el código.
*   **`debugger`**: Para pausar la ejecución en el navegador.

---

## 📢 **Manejo de Errores**

### **Propagación**
A veces es mejor devolver un valor especial (como `null` o `-1`) para indicar fallo en lugar de detener el programa.

### **Excepciones (Try / Catch)**
Permiten que el código "lance" (`throw`) un error y otra parte lo "atrape" (`catch`).

```javascript
function direccionACadena(direccion) {
    if (direccion == null) throw new Error("Dirección inválida");
    return String(direccion);
}

try {
    console.log(direccionACadena(null));
} catch (error) {
    console.log("Algo salió mal: " + error.message);
} finally {
    console.log("Limpieza finalizada."); // Se ejecuta SIEMPRE
}
```

---

## 🎯 **Excepciones Selectivas**

Es mejor crear tipos de error personalizados para distinguir errores esperados de bugs reales.

```javascript
class ErrorDeEntrada extends Error { }

function leerEntrada() {
    throw new ErrorDeEntrada("Dato no válido");
}

try {
    leerEntrada();
} catch (e) {
    if (e instanceof ErrorDeEntrada) {
        console.log("Error de usuario: " + e.message);
    } else {
        throw e; // Si no es conocido, relanzarlo
    }
}
```

---

## 🛡️ **Afirmaciones (Assertions)**

Comprobaciones internas para asegurar que el programa no continúe si algo que DEBERÍA ser cierto no lo es.

```javascript
function eliminarUltimo(array) {
    if (array.length == 0) {
        throw new Error("Afirmación fallida: El array no debería estar vacío");
    }
    return array.pop();
}
```
