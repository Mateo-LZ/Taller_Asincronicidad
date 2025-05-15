// Función delay que retorna una Promesa que se resuelve después de cierto tiempo
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función asíncrona que procesa cada nombre con una espera de 1 segundo entre ellos
async function procesarNombres(nombres) {
  for (const nombre of nombres) {
    await delay(1000); // Espera 1 segundo
    console.log(`Cargando: ${nombre}`);
  }
}

// Arreglo de nombres para procesar
const listaDeNombres = ['Kevin', 'Mateo', 'Miguel', 'Miller'];

// Llamada a la función
procesarNombres(listaDeNombres);
