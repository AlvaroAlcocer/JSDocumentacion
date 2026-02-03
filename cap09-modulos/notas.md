# 🧩 Notas: Módulos

---

## 🏗️ **¿Por qué Módulos?**

Los módulos nos permiten dividir el programa en piezas más pequeñas y manejables, con dependencias claras.
*   **Mantenibilidad:** Código más fácil de entender y arreglar.
*   **Espacio de nombres (Namespacing):** Evita colisiones de nombres de variables globales.
*   **Reutilización:** Permite usar el mismo código en diferentes proyectos.

---

## 📦 **Paquetes (Packages)**

Un paquete es un trozo de código que puede ser distribuido (copiado e instalado). Generalmente incluye:
1.  **Código fuente.**
2.  **Documentación.**
3.  **Metadatos** (quién lo escribió, licencias, versiones).

El repositorio más grande de paquetes de JavaScript es **NPM** (Node Package Manager).

---

## 🛠️ **Módulos CommonJS**

Es el sistema de módulos usado originalmente por **Node.js**.

*   **`require`:** Función para cargar módulos. Lee un archivo JS, lo ejecuta y devuelve su interfaz.
*   **`module.exports`:** Objeto especial donde se añaden las propiedades y funciones que el módulo quiere exportar (hacer públicas).

**Ejemplo de módulo (`formatDate.js`):**

```javascript
const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

exports.name = function(number) {
  return names[number];
};
exports.number = function(name) {
  return names.indexOf(name);
};
```

**Uso (`main.js`):**

```javascript
const { name } = require("./formatDate");
console.log(name(1)); // → Monday
```

> ⚠️ CommonJS carga los módulos de forma **síncrona**. No es ideal para el navegador (web) porque detendría la carga de la página.

---

## 🚀 **Módulos ECMAScript (ES Modules)**

Es el estándar oficial de JavaScript (introducido en ES6/2015). A diferencia de CommonJS, permite análisis estático de dependencias.

*   **`export`:** Se usa antes de definir una función, clase o variable para hacerla pública.
*   **`import`:** Se usa para traer funcionalidades de otros módulos.

**Sintaxis de Exportación:**

```javascript
// exportando individualmente
export function square(x) { return x * x; }

// exportación por defecto (solo una por archivo)
export default class User { ... }
```

**Sintaxis de Importación:**

```javascript
import { square } from "./math.js";
import User from "./user.js"; // Importa el default
import * as Math from "./math.js"; // Importa todo como objeto
```

> ✅ ES Modules soporta carga **asíncrona**, ideal para navegadores.

---

## 🏗️ **Construcción y Empaquetado (Bundling)**

Como cargar muchos archivos pequeños por red es lento, usamos herramientas ("bundlers") para combinar todos los módulos en un solo archivo grande (o pocos archivos) antes de subir la web.
*   Minificación (reducir tamaño eliminando espacios y comentarios).
*   Transpilación (convertir JS moderno a versiones antiguas para compatibilidad, ej: Babel).

Herramientas populares: **Webpack, Rollup, Parcel, Vite**.

---

## 🎨 **Diseño de Módulos**

¿Qué hace un buen módulo?
1.  **Alta Cohesión:** Las cosas que están juntas deben pertenecer al mismo concepto.
2.  **Bajo Acoplamiento:** Los módulos deben depender lo menos posible entre sí.
3.  **Interfaz Clara:** Exportar solo lo necesario (API pública) y ocultar los detalles internos (encapsulamiento).
