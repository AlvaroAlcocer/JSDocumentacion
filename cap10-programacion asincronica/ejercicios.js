// 1. Convertir Callback a Promesa
// Tienes la siguiente función que usa un callback. Conviértela para que devuelva una Promesa.
function esperar(segundos, callback) {
    setTimeout(callback, segundos * 1000);
}

// Tu solución aquí:
function esperarPromesa(segundos) {
    return new Promise(resolve => {
        setTimeout(resolve, segundos * 1000);
    });
}

// Prueba:
// esperarPromesa(2).then(() => console.log("Pasaron 2 segundos"));


// 2. Consumir Promesas con Async/Await
// Crea una función asíncrona llamada 'procesarDatos' que espere a que 'esperarPromesa' termine
// (digamos, esperar 1 segundo) y luego imprima "Datos procesados".

async function procesarDatos() {
    console.log("Iniciando proceso...");
    await esperarPromesa(1);
    console.log("Datos procesados");
}

// procesarDatos();


// 3. Manejo de Errores
// Crea una función que devuelva una promesa que se rechace (reject) aleatoriamente 50% de las veces.
// Usa async/await y try/catch para manejar el error correctamente e imprimir un mensaje diferente si falla o si tiene éxito.

function operacionArriesgada() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("¡Éxito!");
        } else {
            reject(new Error("¡Fallo catastrófico!"));
        }
    });
}

async function ejecutarOperacion() {
    try {
        const resultado = await operacionArriesgada();
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error capturado:", error.message);
    }
}

// ejecutarOperacion();


// 4. Promesas en paralelo
// Usa Promise.all para ejecutar 3 temporizadores (usando esperarPromesa) de diferentes tiempos (ej. 1s, 2s, 3s)
// y muestra un mensaje cuando TODOS hayan terminado.

async function ejecutarEnParalelo() {
    console.time("TiempoTotal");
    await Promise.all([
        esperarPromesa(1),
        esperarPromesa(2),
        esperarPromesa(3)
    ]);
    console.log("Todas las promesas terminaron");
    console.timeEnd("TiempoTotal"); // Debería ser aprox 3s, no 6s
}

// ejecutarEnParalelo();
