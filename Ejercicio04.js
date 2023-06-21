function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      switch (true) {
        case i % 3 === 0 && i % 5 === 0:
          return ("FizzBuzz");
          break;
        case i % 3 === 0:
          return ("Fizz");
          break;
        case i % 5 === 0:
          return ("Buzz");
          break;
        default:
          return (i);
          break;
      }
    }
  }
/*--------------------Ejecutar el algoritmo---------------------*/
  fizzBuzz(15);