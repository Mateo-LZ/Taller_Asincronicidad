const miPromesa = new Promise((resolve, reject) => {
  const numero = Math.random(); // Genera un número entre 0 y 1
  console.log("Numero generado:", numero);

  if (numero >= 0.5) {
    resolve("Promesa resuelta exitosamente.");
  } else {
    reject("Promesa rechazada");
  }
});

miPromesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error); // Muestra: Promesa rechazada 
  });