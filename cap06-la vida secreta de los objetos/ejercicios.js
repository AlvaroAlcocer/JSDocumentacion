/*# EJERCICIOS – CAPÍTULO 6: LA VIDA SECRETA DE LOS OBJETOS

//NIVEL 1 – OBJETOS Y MÉTODOS

/*
1.- Creando métodos
- Crea un objeto `perro` con propiedad `nombre`.
- Agrégale un método `ladrar` que imprima "Guau, soy [nombre]".
*/

// TU CÓDIGO AQUÍ



/*
2.- Contexto (this)
- Explica por qué el siguiente código da undefined/error y soluciónalo.
*/

let gato = {
    tipo: "persa",
    maullar: function () {
        console.log("Miau, soy " + this.tipo);
    }
};
let maullarFn = gato.maullar;
// maullarFn(); // <-- Descomenta y arregla esto

// TU CÓDIGO AQUÍ




//NIVEL 2 – CLASES Y PROTOTIPOS

/*
3.- Clase Rectángulo
- Crea una clase `Rectangulo` con constructor(ancho, alto).
- Método `area()` que devuelva ancho * alto.
- Método `perimetro()` que devuelva 2*(ancho + alto).
*/

// TU CÓDIGO AQUÍ




//NIVEL 3 – EJERCICIOS DEL LIBRO (ELOQUENT JS)

/*
4.- Un tipo Vector (A Vector Type)
- Crea una clase `Vec` que represente un vector en dos dimensiones.
- Constructor recibe (x, y).
- Método `plus(otroVec)`: devuelve nuevo Vec sumando coordenadas.
- Método `minus(otroVec)`: devuelve nuevo Vec restando coordenadas.
- Propiedad getter `length`: devuelve la longitud del vector (distancia a 0,0).
  (Pista: Pitágoras -> raiz cuadrada de x^2 + y^2)

console.log(new Vec(1, 2).plus(new Vec(2, 3))); // → Vec{x: 3, y: 5}
console.log(new Vec(3, 4).length); // → 5
*/

// TU CÓDIGO AQUÍ



/*
5.- Grupos (Groups)
- El entorno estándar de JS tiene `Set`. Crea tu propia clase `Group`.
- Métodos: `add(valor)`, `delete(valor)`, `has(valor)`.
- Constructor crea grupo vacío.
- `add` solo añade si no existe.
- Método estático `from(iterable)` que recibe un array (u otro iterable) y crea un grupo.
*/

class Group {
    // TU CÓDIGO AQUÍ
}




/*
6.- Grupos Iterables
- Haz que la clase `Group` del ejercicio anterior sea iterable.
- Debes implementar el método [Symbol.iterator].
- Puedes usar un generador o devolver un objeto iterador manual.

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
*/

// TU CÓDIGO AQUÍ




//NIVEL 4 – CONCEPTOS AVANZADOS

/*
7.- Préstamo de método (Borrowing a method)
- Tienes un objeto que podría tener una propiedad llamada 'hasOwnProperty'.
- ¿Cómo llamarías a `Object.prototype.hasOwnProperty` sobre él de forma segura?
*/

let mapa = { one: true, two: true, hasOwnProperty: true };

// console.log(mapa.hasOwnProperty("one")); // Esto falla
// TU SOLUCIÓN AQUÍ
