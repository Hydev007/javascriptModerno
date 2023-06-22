const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = "20";

console.log(numero1);
console.log(Number.parseInt(numero1)); //convierte de string a number pero entero
console.log(Number.parseFloat(numero2)); //convierte de string a number pero respeta las decimales
console.log(Number.parseFloat(numero3)); //NAN

//revisar si un numero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
