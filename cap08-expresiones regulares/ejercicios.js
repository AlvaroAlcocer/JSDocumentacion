/* 1.- Regexp Golf
Para cada uno de los siguientes elementos, escribe una expresión regular
para probar si cualquiera de las subcadenas dadas ocurre en una cadena.
La expresión regular debe coincidir solo con cadenas que contengan una de
las subcadenas descritas.

Intenta usar el menor número de caracteres posible.
Di si cada solución es correcta probando visualmente.
*/

// Fill in the regular expressions

// car y cat
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

// pop y prop
verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

// ferret, ferry, y ferrari
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

// Cualquier palabra terminada en ious
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// Un espacio en blanco seguido de un punto, coma, dos puntos o punto y coma
verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

// Una palabra con más de seis letras
verify(/\w{7}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

// Una palabra sin la letra e (o E)
verify(/\b[^\se]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Fallo al coincidir '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Coincide inesperadamente '${str}'`);
    }
}


/* 2.- Estilo de Comillas (Quoting Style)
Imagina que has escrito una historia y usaste comillas simples para
marcar los diálogos. Ahora quieres reemplazar todas las comillas de
diálogo con comillas dobles, pero mantener las comillas simples usadas
en contracciones como "aren't".

Piensa en un patrón que distinga estos dos tipos de uso de comillas
y crea una llamada al método replace que haga el cambio adecuado.
*/

let text = "'I'm the cook,' he said, 'it's my job.'";
// Cambia esta llamada
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."


/* 3.- Números Nuevamente (Numbers Again)
Escribe una expresión que coincida solo con números válidos al estilo JavaScript.
Debe soportar un signo menos o más opcional frente al número, el punto decimal,
y la notación exponencial (5e-3 o 1E10) con signo opcional frente al exponente.
Observa que no es necesario que haya dígitos antes o después del punto, pero
el número no puede ser solo un punto ".".
*/

// Fill in this regular expression.
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3e2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        console.log(`Falló al coincidir '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Coincide incorrectamente '${str}'`);
    }
}
