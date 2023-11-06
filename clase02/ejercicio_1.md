### Consigna

Tengo desarrollada la siguiente función en javascript
```js
   function suma (a,b,callback){
   let c = a +b;
   callback();
  }
```

¿Que es el tercer parámetro recibido?
¿En que casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.

### Respuesta

El tercer parámetro recibido en la función suma es un callback. Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal completo su tarea. En este caso, la función callback se ejecutará después de que se calcule la suma de los valores a y b.

Las funciones callback se usan en situaciones en las que se necesita realizar operaciones asincrónicas o cuando se desea que una función se ejecute después de que otra función haya terminado su ejecución.

```js
   function miCallback() {
     console.log("suma calculada.");
   }
   
   function suma(a, b, callback) {
     let c = a + b;
     callback();
   }
   
   suma(3, 4, miCallback);

   // Después de calcular la suma de 3 y 4, miCallback se ejecuta y muestra el mensaje "suma calculada" por consola.

```