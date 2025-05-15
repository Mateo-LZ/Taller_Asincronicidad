
// Función que devuelve una promesa que se resuelve en 3 segundos
function esperarTresSegundos() {
  return new Promise((resolve) => {
    setTimeout(() => { //Para simular una espera de 3 segundos, y luego la promesa se resuelve con un mensaje
      resolve("Promesa resuelta después de 3 segundos");
    }, 3000); // 3000 milisegundos = 3 segundos
  });
}

async function ejecutarProceso() {// Función asíncrona que usa await para esperar la promesa
 const resultado = await esperarTresSegundos();// Espera que la promesa termine antes de continuar
  
  // Imprime el resultado de la promesa
  console.log(resultado);

  // Luego imprime mensaje final
  console.log("Proceso terminado");
}

// Llamamos a la función para ejecutar el flujo
ejecutarProceso();
