const countNameRepetitions = (names) => {
    for (const name of names) {
        if (typeof name !== "string") {
            throw new Error("¡Error! Solo se aceptan nombres.");
        }
    }

    const count = names.reduce((acumulador, name) => {
        acumulador[name] = acumulador[name] ? acumulador[name] + "*" : "*";
        return acumulador;
    }, {});

    const result = {};

    for (const name in count) {
        result[name] = count[name];
    }

    return result;
};

/*--------------------Ejecutar el algoritmo---------------------*/

const nombres = ["Juan", "María", "Pedro", "Juan", "María", "María"];
const resultado = countNameRepetitions(nombres);

for (const name in resultado) {
    console.log(`${name}: ${resultado[name]}`);
}