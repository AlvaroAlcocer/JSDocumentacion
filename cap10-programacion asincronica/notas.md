# ⏳ Capítulo 10: Programación Asincrónica

La programación asincrónica es una técnica que permite a tu programa iniciar una tarea potencialmente larga y continuar respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar a que termine dicha tarea para continuar.

---

## ⚡ **Asincronía**
En un entorno síncrono, las cosas ocurren una tras otra. Si una función tarda mucho en ejecutarse, congela todo lo demás. La asincronía permite que múltiples cosas sucedan al mismo tiempo o gestionarlas de manera que no bloqueen el hilo principal.

---

## 📞 **Callbacks**
Los callbacks fueron la primera forma de manejar la asincronía en JavaScript. Una callback es simplemente una función que se pasa como argumento a otra función y se ejecuta después de que algún evento ocurra.

```javascript
setTimeout(() => {
  console.log("Esto sucede después de 1 segundo");
}, 1000);
```

> ⚠️ **Callback Hell:** Cuando anidamos múltiples callbacks, el código se vuelve difícil de leer y mantener.

---

## 🤝 **Promesas (Promises)**
Una Promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

**Estados de una promesa:**
*   **Pending (Pendiente):** Estado inicial, ni cumplida ni rechazada.
*   **Fulfilled (Cumplida):** La operación se completó con éxito.
*   **Rejected (Rechazada):** La operación falló.

```javascript
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Hubo un error");
  }
});

promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
```

---

## ⏩ **Async / Await**
Introducido en ES2017, es azúcar sintáctico sobre las promesas. Hace que el código asíncrono se vea y se comporte un poco más como el código síncrono.

*   **`async`**: Declara una función asíncrona. Siempre devuelve una promesa.
*   **`await`**: Pausa la ejecución de la función `async` hasta que la promesa se resuelve.

```javascript
async function miFuncionAsincrona() {
  try {
    let resultado = await promesa;
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 🔄 **Event Loop**
Es el mecanismo que permite a JavaScript realizar operaciones no bloqueantes, a pesar de ser "single-threaded" (un solo hilo). Coordina la ejecución de código, eventos y tareas asíncronas.
