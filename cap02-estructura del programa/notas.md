# 📘 Notas: Operadores, Bucles, Condicionales en JavaScript

---

## 🔢 **Operadores de incremento y decremento**

| Operador | Significado             | Explicación                                               |
| -------- | ----------------------- | --------------------------------------------------------- |
| `i++`    | Suma 1                  | Incremento posterior → primero usa el valor, luego suma 1 |
| `++i`    | Suma 1                  | Incremento previo → suma 1 antes de usar el valor         |
| `i--`    | Resta 1                 | Decremento posterior                                      |
| `--i`    | Resta 1                 | Decremento previo                                         |
| `+=`     | Suma un valor           | `x += 5` → `x = x + 5`                                    |
| `-=`     | Resta un valor          | `x -= 2` → `x = x - 2`                                    |
| `*=`     | Multiplica por un valor | `x *= 3` → `x = x * 3`                                    |
| `/=`     | Divide por un valor     | `x /= 2` → `x = x / 2`                                    |
| `%=`     | Guarda el residuo       | `x %= 3` → `x = x % 3`                                    |

---

## 🔍 **Operadores de comparación**

| Operador | Significado             | Ejemplo               |
| -------- | ----------------------- | --------------------- |
| `>`      | Mayor que               | `5 > 3` → `true`      |
| `<`      | Menor que               | `2 < 10` → `true`     |
| `>=`     | Mayor o igual           | `5 >= 5` → `true`     |
| `<=`     | Menor o igual           | `3 <= 4` → `true`     |
| `==`     | Igual (NO estricto)     | `"5" == 5` → `true`   |
| `===`    | Igual estricto          | `"5" === 5` → `false` |
| `!=`     | Diferente (NO estricto) | `"5" != 5` → `false`  |
| `!==`    | Diferente estricto      | `"5" !== 5` → `true`  |

---

## 🧠 **Operadores lógicos**

| Operador | Significado                                            | Ejemplo                        |
|----------|---------------------------------------------------------|--------------------------------|
| `&&`     | AND → verdadero solo si ambos son verdaderos            | `true && false` → `false`      |
| `\|\|`   | OR → verdadero si al menos uno es verdadero             | `true \|\| false` → `true`     |
| `!`      | NOT → invierte el valor                                 | `!true` → `false`              |
| `??`     | Nullish → usa valor alterno si es `null` o `undefined`  | `x ?? "por defecto"`           |

---


## 🌀 **Bucles**

| Bucle      | Qué hace                                             |
| ---------- | ---------------------------------------------------- |
| `while`    | Repite **mientras** la condición sea `true`.         |
| `do…while` | Ejecuta al menos una vez, luego evalúa la condición. |
| `for`      | Ideal cuando conoces cuántas iteraciones necesitas.  |

---

## 🔀 **Condicionales**

| Palabra clave | Función                                              |
| ------------- | ---------------------------------------------------- |
| `if`          | Ejecuta código si la condición es `true`.            |
| `else`        | Se ejecuta si lo anterior fue `false`.               |
| `else if`     | Permite evaluar múltiples condiciones.               |
| `switch`      | Evalúa un valor con múltiples casos.                 |
| `case`        | Caso dentro de `switch`.                             |
| `break`       | Detiene el `switch` para no seguir ejecutando casos. |
| `default`     | Se ejecuta si ningún `case` coincide.                |

---

## 📐 **Funciones útiles de `Math` en JavaScript**

### **Redondeo**

| Función         | Qué hace              | Ejemplo                 |
| --------------- | --------------------- | ----------------------- |
| `Math.floor(x)` | Redondea hacia abajo  | `Math.floor(3.9)` → `3` |
| `Math.ceil(x)`  | Redondea hacia arriba | `Math.ceil(3.1)` → `4`  |
| `Math.round(x)` | Redondeo normal       | `Math.round(3.5)` → `4` |
| `Math.trunc(x)` | Quita decimales       | `Math.trunc(3.9)` → `3` |

---

### **Números aleatorios**

| Función                                             | Significado                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| `Math.random()`                                     | Da un número entre `0` y `1` (sin incluir el 1) |
| `Math.floor(Math.random() * n)`                     | Entero entre `0` y `n-1`                        |
| `Math.floor(Math.random() * (max - min + 1)) + min` | Entero entre `min` y `max`                      |

```js
let aleatorio = Math.floor(Math.random() * 10); // 0 a 9
```

---

### **Valores máximos y mínimos**

| Función           | Qué hace          |
| ----------------- | ----------------- |
| `Math.max(a,b,c)` | Devuelve el mayor |
| `Math.min(a,b,c)` | Devuelve el menor |

---

### **Otros útiles**

| Función          | Qué hace          |
| ---------------- | ----------------- |
| `Math.pow(a, b)` | Potencias → `a^b` |
| `Math.sqrt(x)`   | Raíz cuadrada     |
| `Math.abs(x)`    | Valor absoluto    |

---

