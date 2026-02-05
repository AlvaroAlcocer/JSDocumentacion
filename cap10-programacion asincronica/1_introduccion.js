// PROGRAMACION ASINCRONA

// El procesador es mucho más rápido que la red o el disco duro.
// La programación asíncrona permite que el programa espere acciones de larga duración 
// sin detener la ejecución de todo el sistema.


// 1. MODELO SÍNCRONO VS ASÍNCRONO
// Sincrónico: Las cosas suceden una a la vez.
// Asíncrono: Permite iniciar una acción y continuar ejecutando otras tareas
// mientras se espera el resultado.

// IMPORTANTE:
// JavaScript sigue siendo SINGLE-THREADED.
// Async NO significa paralelo — significa "no bloquear el hilo principal".


// 2. RETROLLAMADAS (CALLBACKS)
// Es un enfoque donde las funciones que esperan algo toman una función adicional
// que se llamará cuando el proceso termine.

setTimeout(() => console.log("Tick"), 500);

// Problema principal:
// El encadenamiento de callbacks genera el "Callback Hell":
// código difícil de leer, mantener y manejar errores.


// 3. PROMESAS (PROMISES)
// Una promesa es un objeto que representa un resultado futuro.

let quince = Promise.resolve(15);
quince.then(valor => console.log(`Obtenido ${valor}`));

// Estados de una promesa:
// - pending  → en espera
// - fulfilled → completada con éxito
// - rejected → falló

// Manejo de errores
Promise.reject("Error!")
    .catch(err => console.log("Capturado:", err));


// 4. FUNCIONES ASÍNCRONAS (ASYNC / AWAIT)
// Permiten escribir código asíncrono con apariencia síncrona.

// IMPORTANTE:
// - Una función async SIEMPRE devuelve una promesa.
// - await SOLO puede usarse dentro de funciones async.

async function ejemplo() {
    return 42;
}

ejemplo().then(console.log); // → 42


async function descifrarCodigo(redID) {
    try {
        let codigo = await withTimeout(joinWifi(redID, "555555"), 50);
        return codigo;
    } catch (error) {
        console.log("Fallo en la conexión: " + error);
    }
}


// 5. GENERADORES (GENERATORS)
// Funciones definidas con 'function*' que pueden pausarse y reanudarse.
// Usan 'yield' para devolver valores manteniendo su estado.

function* potencias(n) {
    for (let actual = n; ; actual *= n) {
        yield actual;
    }
}

// Ejemplo:
let gen = potencias(2);
console.log(gen.next().value); // 2
console.log(gen.next().value); // 4


// 6. EL BUCLE DE EVENTOS (EVENT LOOP)
// JavaScript ejecuta una tarea a la vez, usando una cola de eventos.

// Las promesas tienen prioridad sobre callbacks como setTimeout
// porque usan la cola de microtareas.

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promesa"));
console.log("fin");

// Orden real:
// fin
// promesa
// timeout


// 7. COMPOSICIÓN ASÍNCRONA (Promise.all)
// Permite ejecutar múltiples promesas en paralelo
// y esperar a que TODAS se resuelvan.

function mostrarCuadro(cuadro) {
    return Promise.all(
        cuadro.map((datos, i) => {
            return enviarSolicitud(direcciones[i], datos);
        })
    );
}

// IMPORTANTE:
// Promise.all FALLA si una sola promesa falla.


// Alternativa más segura:
Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject("error")
]).then(console.log);
