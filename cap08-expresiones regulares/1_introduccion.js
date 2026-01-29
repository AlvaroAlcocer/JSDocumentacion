//EXPRESIONES REGULARES 

// Las expresiones regulares son una forma de describir patrones en cadenas de texto.
// Forman un lenguaje separado dentro de JavaScript para inspeccionar y procesar texto.


// 1. CREACIÓN DE UNA EXPRESIÓN REGULAR
// Se pueden crear con el constructor RegExp o como un literal entre barras diagonales (/).
let re1 = new RegExp("abc"); // Útil cuando el patrón es dinámico (proviene de una variable)
let re2 = /abc/;             // Forma más común y corta

// El método .test() devuelve un Booleano si el patrón existe en la cadena.
console.log(/abc/.test("abcde")); // → true

// Ejemplo práctico
let texto = "xyzabcxyz";
console.log(re2.test(texto)); // → true


// 2. CONJUNTOS DE CARACTERES
// Poner caracteres entre corchetes hace que coincida con cualquiera de ellos.
console.log(/[0123456789]/.test("en 1992")); // → true
console.log(/[0-9]/.test("en 1992"));         // → true (usando un rango con '-')

// Atajos comunes (Códigos de barra invertida):
// \d  -> Cualquier dígito [0-9]
// \w  -> Carácter alfanumérico (NO incluye ñ ni acentos)
// \s  -> Espacio en blanco (espacio, tab, nueva línea)
// \D, \W, \S -> Invierten el significado
// .   -> Cualquier carácter excepto nueva línea

console.log(/\w/.test("ñ")); // → false (detalle importante)

// Invertir un conjunto con [^]:
let noBinario = /[^01]/; // Coincide con cualquier carácter excepto 0 o 1


// 3. REPETICIÓN (CUANTIFICADORES)
// Controlan cuántas veces puede aparecer una parte del patrón:
// +   -> Una o más veces
// *   -> Cero o más veces
// ?   -> Opcional (cero o una vez)
// {n} -> Exactamente n veces
// {n,m} -> Entre n y m veces

let dateTime = /\d{1,2}-\d{1,2}-\d{4}/; // Ej: 1-30-2003
// Nota: valida el FORMATO, no fechas reales (99-99-0000 también pasaría)


// 4. COINCIDENCIAS Y GRUPOS
// El método .exec() devuelve un objeto o null si no hay coincidencia.
let coincidencia = /\d+/.exec("uno dos 100");
console.log(coincidencia.index); // → 8 (posición de inicio)

// Puede devolver null
console.log(/\d+/.exec("sin números")); // → null

// Agrupación con paréntesis ()
let citado = /'([^']*)'/;
console.log(citado.exec("ella dijo 'hola'")); // → ["'hola'", "hola"]


// 5. EL MÉTODO REPLACE
// Permite usar expresiones regulares para reemplazar texto.
// La opción 'g' reemplaza todas las coincidencias.
console.log("Borobudur".replace(/[ou]/g, "a")); // → Barabadar

// Referencia a grupos con $1, $2...
console.log("Liskov, Barbara".replace(/(\w+), (\w+)/, "$2 $1"));
// → Barbara Liskov

// replace también puede recibir una función
console.log("10,20,30".replace(/\d+/g, n => Number(n) * 2));
// → "20,40,60"


// 6. AVARICIA (GREED) VS PEREZA
// Los cuantificadores son avariciosos por defecto.
// Agregar '?' los vuelve perezosos.
function eliminarComentarios(codigo) {
    return codigo.replace(/\/\*[^]*?\*\//g, "");
}


// 7. LÍMITES Y OPCIONES (FLAGS)
// ^  -> Inicio de la cadena
// $  -> Fin de la cadena
// \b -> Límite de palabra

// Opciones:
// i -> Ignorar mayúsculas/minúsculas
// g -> Global
// u -> Unicode (maneja correctamente emojis)

console.log(/🍎{3}/u.test("🍎🍎🍎")); // → true
// Sin 'u', {3} contaría unidades UTF-16, no caracteres reales


// 8. LA PROPIEDAD LASTINDEX
// Solo funciona con expresiones globales (g) o pegajosas (y)
let patronGlobal = /abc/g;

patronGlobal.exec("xyz abc abc");
console.log(patronGlobal.lastIndex); // → avanza tras cada coincidencia
