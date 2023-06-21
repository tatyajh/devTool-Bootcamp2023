const drawX = (tamano) => {
    for (let i = 0; i < tamano; i++) {
      let linea = '';
      for (let j = 0; j < tamano; j++) {
        if (i === j || i === tamano - j - 1) {
          linea += '* ';
        } else {
          linea += '  ';
        }
      }
      return(linea);
    }
  }
  
/*--------------------Ejecutar el algoritmo---------------------*/
  drawX(5);