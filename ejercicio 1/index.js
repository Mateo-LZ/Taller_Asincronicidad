const simple = (milisegundos) => { //el tiempo en milisegundos que la promesa esperará antes de resolverse.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(milisegundos);//
      console.log("Promesa Cumplida");
    },);
  });
};

simple(2000)//espera 2 segundos
  .then((mensaje) => {
    console.log(mensaje); 
  })
  .catch((error) => {
    console.error(error);
  });