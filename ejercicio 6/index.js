// Función asíncrona que devuelve "Hola, Mundo"
async function saludo() {
  return "Hola, Mundo";
}

// Consumir la función con .then()
saludo().then((mensaje) => {
  console.log(mensaje); // Hola, Mundo
});
