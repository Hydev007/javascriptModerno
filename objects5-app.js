const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,  
    informacion: {
        peso:"1kl",
        medida: "1m",
        fabricacion: {
            pais: "china",
        }
    }    
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion. medida);

console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion. pais);