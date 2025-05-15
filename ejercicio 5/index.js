// Creamos una promesa que se resuelve después de 2 segundos
const promesaRapida = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa rápida (2 segundos)"); // mensaje cuando se resuelve
  }, 2000); // espera 2000 milisegundos (2 segundos)
});

// Creamos otra promesa que se resuelve después de 5 segundos
const promesaLenta = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa lenta (5 segundos)"); // mensaje cuando se resuelve
  }, 5000); // espera 5000 milisegundos (5 segundos)
});

// Usamos Promise.race() para ejecutar ambas promesas y quedarnos con la primera que se resuelva
Promise.race([promesaRapida, promesaLenta])
  .then((resultado) => {
    // Este bloque se ejecuta cuando la primera promesa se resuelve
    console.log("Ganó:", resultado); // Muestra cuál fue la más rápida
  })
  .catch((error) => {
    // Este bloque se ejecuta si la primera promesa se rechaza
    console.error("Ocurrió un error:", error);
  });
