const producto = 'monitor 20 pulgadas';

// .repeat para repetir cadena de texto

const texto = 'en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`)

// .split dividir string

const actividad = 'aprendiendo javascript mderno';
console.log(actividad.split(""));

const hobbies = 'leer, caminar, escuchar musica, escribir '
console.log(hobbies.split(","));

const tweet = "javascript #Moderno";
console.log(tweet.split('#'))