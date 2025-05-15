// Función que simula una búsqueda con un retraso aleatorio
function buscar(id) {
  // Genera un retraso aleatorio entre 1000 ms (1 segundo) y 4000 ms (4 segundos)
  const retraso = Math.floor(Math.random() * 3000) + 1000;

  // Retorna una promesa que se resuelve después del retraso
  return new Promise(resolve => {
    setTimeout(() => {
      // La promesa se resuelve con un mensaje indicando el resultado de la búsqueda
      resolve(`Resultado de la búsqueda ${id} (en ${retraso} ms)`);
    }, retraso);
  });
}

// Función asíncrona que realiza varias búsquedas al mismo tiempo
async function realizarBusquedas() {
  // Se crean tres promesas de búsqueda (todas comienzan a ejecutarse en paralelo)
  const busquedas = [
    buscar(1),
    buscar(2),
    buscar(3)
  ];

  try {
    // Espera a que todas las promesas se resuelvan con Promise.all
    // Esto devuelve un arreglo con los resultados de cada búsqueda
    const resultados = await Promise.all(busquedas);

    // Muestra todos los resultados juntos en la consola
    console.log("Todos los resultados:");
    resultados.forEach(resultado => console.log(resultado));
  } catch (error) {
    // Si alguna de las promesas falla, se captura aquí el error
    console.error("Ocurrió un error en alguna búsqueda:", error);
  }
}

// Llamada a la función para ejecutar las búsquedas simuladas
realizarBusquedas();

