//BUGS Y ERRORES

// El proceso de encontrar errores en los programas se llama depuración (debugging).
// Los errores pueden ser de sintaxis, de lógica o por supuestos incorrectos sobre el entorno.

// 1. MODO ESTRICTO (STRICT MODE)
// JavaScript se puede volver un poco más estricto al poner "use strict" al principio.
// Esto ayuda a detectar errores comunes, como asignar valores a variables no declaradas.

function modoEstricto() {
    "use strict";
    // for (let i = 0; i < 10; i++) // Olvidar el 'let' causaría un error en modo estricto
}


// 2. TIPADO Y LENGUAJE
// Como JavaScript no verifica tipos antes de ejecutar, los errores suelen aparecer tarde.
// Una forma de evitarlos es escribir comentarios claros o usar herramientas como TypeScript.


// 3. PRUEBAS (TESTING)
// Escribir pruebas automatizadas ayuda a verificar que el código haga lo que esperas.
function test(nombre, etiqueta) {
    if (!etiqueta) console.log(`FALLÓ: ${nombre}`);
}

test("Conversión a mayúsculas", "hola".toUpperCase() == "HOLA");


// 4. DEPURACIÓN (DEBUGGING)
// Cuando el código no funciona, puedes usar 'console.log' para ver qué pasa 
// o usar la palabra clave 'debugger' para pausar la ejecución en el navegador.


// 5. PROPAGACIÓN DE ERRORES
// No siempre es bueno que el programa se detenga. A veces es mejor devolver un valor
// especial (como null o -1) para indicar que algo falló, aunque esto puede ensuciar el código.


// 6. EXCEPCIONES (TRY / CATCH)
// Las excepciones permiten que el código "lance" un error y que otra parte lo "atrape".
// Esto detiene el flujo actual y busca el bloque catch más cercano.

function direccionACadena(direccion) {
    if (direccion == null) throw new Error("Dirección inválida");
    return String(direccion);
}

try {
    console.log(direccionACadena(null));
} catch (error) {
    console.log("Algo salió mal: " + error.message);
} finally {
    // El bloque finally se ejecuta SIEMPRE, haya error o no.
    // Es ideal para "limpiar" (cerrar archivos, desbloquear recursos).
    console.log("Limpieza finalizada.");
}


// 7. EXCEPCIONES SELECTIVAS
// No debemos atrapar todos los errores por igual. Es mejor crear tipos de error 
// personalizados para distinguir errores esperados de errores de programación (bugs).

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
        throw e; // Si es otro tipo de error, lo volvemos a lanzar
    }
}


// 8. AFIRMACIONES (ASSERTIONS)
// Son comprobaciones internas para asegurar que el programa no continúe si algo
// que DEBERÍA ser cierto no lo es. Ayudan a encontrar bugs de lógica.

function eliminarUltimo(array) {
    if (array.length == 0) {
        throw new Error("Afirmación fallida: El array no debería estar vacío");
    }
    return array.pop();
}