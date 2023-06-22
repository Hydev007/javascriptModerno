const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si son numeros iguales
console.log(numero1 == numero3); //false
console.log(numero1 == numero2); //true

//comparador estricto
console.log(numero1 === numero2); //false
console.log(numero1 === parseInt(numero2)); //true
console.log(typeof numero1);
console.log(typeof numero2);

//diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false
console.log(numero1 !== numero2); //true