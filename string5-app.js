const producto = 'monitor 20 pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitor curvo'));

// .slice para cortar

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); /* si el numero inicial es mayor, no hace nada */

// alternativa a slide

console.log(producto.substring(0, 10));
console.log(producto.slice(2, 1));/*  si corta pero toma como referencia el numero menor */

const usuario = "pepe"
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));