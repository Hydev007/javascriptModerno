const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);

// prevenir que un objeto sea modificado

Object.freeze( producto ); 
// producto.disponible = false;



// Freeze tampoco permite agregar nuevas propiedaes
// producto.imagen = "imagen.jpg";

// Tampoco se pueden eliminar propiedades

// delete producto.nombre;

// si quieres revisar si un objeto esta congelado puedes usar

console.log( Object.isFrozen(producto) );

console.log(producto);
