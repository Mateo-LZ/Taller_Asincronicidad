function time() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 completado");
      resolve();
    }, 1000); // espera 1 segundo
  });
}

function paso2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 completado");
      resolve();
    }, 1000); // espera 1 segundo
  });
}

function paso3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 completado");
      resolve();
    }, 1000); // espera 1 segundo
  });
}

// Encadenamiento de promesas
time()
  .then(() => paso2())
  .then(() => paso3())
  .then(() => {
    console.log("Todos los pasos completados");
  });
