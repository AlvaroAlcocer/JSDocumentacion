/*1.- Reintentar (Retry)

Digamos que tienes una función `primitiveMultiply` que en el 20% de los casos
multiplica dos números y en el otro 80% lanza una excepción de tipo
`MultiplicatorUnitFailure`. Escribe una función `reliableMultiply` que envuelva
a esta inestable función y siga intentando hasta que una llamada tenga éxito,
al terminar devolviendo el resultado.

Asegúrate de manejar solo las excepciones que estás tratando de manejar.
*/

class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    // TU CÓDIGO AQUÍ
}

// console.log(reliableMultiply(8, 8));
// → 64


/*
2.- La Caja Bloqueada (The Locked Box)

Considera el siguiente objeto (bastante artificial) `box`:
Es una caja con una cerradura. Hay un array dentro, pero solo puedes acceder a él
cuando la caja está desbloqueada. Escribe una función `withBoxUnlocked` que
toma una función como argumento, desbloquea la caja, ejecuta la función, y luego
asegura que la caja se bloquee de nuevo antes de devolver, independientemente
de si la función argumento devolvió normalmente o lanzó una excepción.

Para puntos extra, asegúrate de que si llamas a `withBoxUnlocked` cuando la caja
ya está desbloqueada, la caja permanezca desbloqueada.
*/

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("¡Bloqueada!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // TU CÓDIGO AQUÍ
}

/*
withBoxUnlocked(function() {
  box.content.push("moneda de oro");
});

try {
  withBoxUnlocked(function() {
    throw new Error("¡Piratas en el horizonte! ¡Aborten!");
  });
} catch (e) {
  console.log("Error levantado: " + e);
}
console.log(box.locked);
// → true
*/
