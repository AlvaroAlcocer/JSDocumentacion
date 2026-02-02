# 🧩 Notas: Expresiones Regulares

---

## 🧵 **Creando Expresiones Regulares**

Una expresión regular es un tipo de objeto. Se puede construir con el constructor `RegExp` o como un valor literal encerrando el patrón en barras `/`.

```javascript
let re1 = new RegExp("abc");
let re2 = /abc/;
```

---

## 🧪 **Probando Coincidencias (Testing)**

El método `test` devuelve `true` o `false` si el patrón se encuentra en la cadena.

```javascript
console.log(/abc/.test("abcde")); // → true
console.log(/abc/.test("abxde")); // → false
```

---

## 🔢 **Conjuntos y Rangos**

*   `[abc]`: Coincide con cualquiera de los caracteres dentro de los corchetes.
*   `[0-9]`: Coincide con cualquier dígito (rango).

**Atajos comunes:**
*   `\d`: Cualquier dígito.
*   `\w`: Cualquier carácter alfanumérico ("carácter de palabra").
*   `\s`: Cualquier espacio en blanco (espacio, tabulador, salto de línea).
*   `\D`, `\W`, `\S`: Lo opuesto a los anteriores (NO dígito, NO alfanumérico, NO espacio).
*   `.`: Cualquier carácter excepto salto de línea.

```javascript
console.log(/\d\d-\d\d-\d\d\d\d/.test("01-30-2003")); // → true
```

---

## 🔁 **Repetición**

*   `+`: Una o más veces.
*   `*`: Cero o más veces.
*   `?`: Cero o una vez (opcional).
*   `{n}`: Exactamente N veces.
*   `{n,m}`: Entre N y M veces.

```javascript
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // → true
console.log(neighbor.test("neighbor"));  // → true
```

---

## 📦 **Agrupación**

Los paréntesis `()` se usan para agrupar subexpresiones. Los operadores de repetición se aplican a todo el grupo.

```javascript
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // → true
```

---

## 🎯 **Métodos de String y Coincidencias (Matches)**

*   **`exec`**: Devuelve null si no hay coincidencia, o un objeto con información si la hay.
*   **`match`**: Método de strings que funciona similar.

```javascript
let match = /\d+/.exec("uno dos 100");
console.log(match);
// → ["100", index: 8, input: "uno dos 100"]
```

---

## 🚧 **Límites de Palabra y Cadena**

*   `^`: Inicio de la cadena.
*   `$`: Fin de la cadena.
*   `\b`: Límite de palabra (donde un carácter `\w` toca uno que no es `\w` o el fin).

---

## 🔄 **Reemplazo**

El método `replace` de los strings puede usar expresiones regulares.

```javascript
console.log("Borraob".replace(/[ao]/, "x")); // → Bxrraob
console.log("Borraob".replace(/[ao]/g, "x")); // → Bxrrxxb (con flag global)
```

**Referencia a grupos:**
Puedes usar `$1`, `$2`... en la cadena de reemplazo para referirte a los grupos capturados entre paréntesis.

```javascript
console.log("Liskov, Barbara".replace(/(\w+), (\w+)/, "$2 $1"));
// → Barbara Liskov
```

---

## 🔍 **Búsqueda Dinámica**

Si necesitas crear una expresión regular a partir de una cadena generada dinámicamente, usa `new RegExp`. Recuerda escapar las barras invertidas en el string.

```javascript
let nombre = "harry";
let texto = "Harry es un mago";
let regexp = new RegExp("\\b" + nombre + "\\b", "gi");
console.log(texto.replace(regexp, "_$1_"));
// → _Harry_ es un mago
```
