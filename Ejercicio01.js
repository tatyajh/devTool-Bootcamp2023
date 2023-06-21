const next_pal = (numero) => {
  if (numero < 0) {
    throw new Error("El número debe ser positivo");
  }
  while (!esPalindromo(numero)) {
      numero++;
    }
      return numero;
  };

const esPalindromo = (numero) => {
    const numeroStr = String(numero);
    const reversoStr = numeroStr.split('').reverse().join('');
    return numeroStr === reversoStr;
};

/*--------------------Ejecutar el algoritmo---------------------*/

let numero = 188;
let siguientePalindromo = next_pal(numero);

console.log(
    "El siguiente palíndromo a partir de",
    numero,
    "es",
    siguientePalindromo
);