// Promesa que se resuelve en 1 segundo con el valor 1
const promesa1 = new Promise((resolve) =>
  setTimeout(() => resolve(1), 1000)
);

// Promesa que se resuelve en 2 segundos con el valor 2
const promesa2 = new Promise((resolve) =>
  setTimeout(() => resolve(2), 2000)
);

// Promesa que se resuelve en 3 segundos con el valor 3
const promesa3 = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

// Usar Promise.all para esperar a que todas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // [1, 2, 3]
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
