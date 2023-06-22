const producto = '              monitor 20 pulgadas      ';

console.log(producto);
console.log(producto.length);

// eliminar espacios en blanco en el inicio y final
console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());