// crear funciones, declaracion

// function sumar(numero, numero2) {// al igual que las variables mas de dos palabras utilizo came case
//     // console.log(numero)
//     // console.log(numero2)
//     console.log(numero + numero2);
// }

// function sumar(numero, numero2 = 0) {// al igual que las variables mas de dos palabras utilizo came case
//     // console.log(numero)
//     // console.log(numero2)
//     console.log(numero + numero2);
// }
// sumar(10, 20)//aca llamo la funcion, la puedo llamar varias veces
// sumar(100, 20)//aca llamo la funcion, la puedo llamar varias veces
// sumar(1000)//aca llamo la funcion, la puedo llamar varias veces

// function sumar(numero = 0,  numero2 = 0) {
//     return numero + numero2;
// }
// const resultado = sumar(10, 20);
// console.log(resultado);

// puede retornar lo que sea, como un arreglo
// function sumar(numero = 0,  numero2 = 0) {
//     return [numero + numero2, "hola mundo"]
// }
// const [resultado, holamundo] = sumar(10, 20);
// console.log(resultado);
// console.log(holamundo);

//tambien puede retornar un objeto
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: "hola mundo"
    }
}
const {resultado, mensaje} = sumar(10, 20);
console.log(resultado);
console.log(mensaje);