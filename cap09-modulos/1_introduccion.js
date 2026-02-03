//MODULOS

// Un programa modular se divide en piezas de código que se ensamblan para formar un sistema.
// Los módulos permiten aislar el código, gestionar dependencias y facilitar la reutilización.


// 1. POR QUÉ USAR MÓDULOS
// - Organización: Evita que el programa se convierta en una "gran bola de barro".
// - Reutilización: Permite usar la misma pieza de código en diferentes proyectos.
// - Aislamiento: Los cambios en un módulo no deberían afectar a otros, siempre que la interfaz sea la misma.
// - Mantenibilidad: El código modular es más fácil de leer, probar y escalar.


// 2. DEPENDENCIAS
// Un módulo casi siempre depende de otros módulos.
// Declarar explícitamente estas dependencias hace que el sistema sea más predecible
// y evita errores difíciles de rastrear.


// 3. GRAFO DE DEPENDENCIAS
// Cuando un módulo importa otro, se forma una red de relaciones.
// A esto se le llama "grafo de dependencias".

// archivoA → archivoB → archivoC

// Las herramientas modernas analizan este grafo antes de ejecutar el programa.


// 4. PAQUETES (PACKAGES)
// Un paquete es un trozo de código que se puede distribuir (copiar e instalar).
// Contiene uno o más módulos y tiene información sobre otros paquetes de los que depende.
// NPM (Node Package Manager) es el repositorio más grande de paquetes para JavaScript.


// 5. MÓDULOS IMPROVISADOS (ANTES DE ES MODULES)
// Antes de que JS tuviera un sistema de módulos oficial, se usaban funciones autoejecutables
// para crear alcances locales y evitar contaminar el espacio global.

const conversorDeMoneda = (function () {
    const tasas = { USD: 1.1, EUR: 1.0 }; // Variable privada del módulo

    return {
        convertir(monto, moneda) {
            return monto * tasas[moneda];
        }
    };
})();

console.log(conversorDeMoneda.convertir(100, "USD"));


// 6. COMMONJS (El sistema tradicional de Node.js)
// Utiliza la función 'require' para importar y el objeto 'exports' para compartir código.
// Es un sistema sincrónico: carga los archivos en el momento en que se llaman.


// Exportación (archivo format-date.js):
/*
exports.formatDate = function(date, format) { ... };
*/

// Importación:
/*
const { formatDate } = require("./format-date");
*/


// 7. MÓDULOS DE ECMASCRIPT (ES MODULES)
// Es el estándar oficial de JavaScript desde 2015. Utiliza 'import' y 'export'.

// IMPORTANTE:
// Las importaciones son ESTÁTICAS.
// El motor de JavaScript analiza los imports antes de ejecutar el archivo,
// construyendo el mapa completo de dependencias.

// ❌ Esto NO es válido:
///*
// if (condicion) {
//   import { algo } from "./modulo.js";
// }
//*/

// Exportación nombrada
export const PI = 3.14159;
export function sumar(a, b) { return a + b; }

// Exportación por defecto (solo una por archivo)
export default class Robot {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


// Importación:
/*
import Robot, { sumar, PI } from "./miModulo.js";
*/


// 8. DISEÑO DE MÓDULOS
// El diseño de una interfaz de módulo debe ser:
// - Simple: Fácil de aprender y usar.
// - Predecible: Que siga las convenciones comunes.
// - Minimalista: No expongas detalles internos.
// - Enfocado: Cada módulo debería tener una única responsabilidad.


// 9. COMPILACIÓN Y EMPAQUETADO (BUNDLING)
// Muchos navegadores no cargan cientos de archivos de forma eficiente.
// Por eso, se usan empaquetadores (Webpack, Rollup, Esbuild, Vite)
// que combinan todos los módulos en uno o varios archivos optimizados.

// Los bundlers también pueden:
// - eliminar código no usado (tree shaking)
// - transformar JS moderno a versiones compatibles
// - reducir tamaño
// - mejorar el rendimiento
