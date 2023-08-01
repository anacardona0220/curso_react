// function - function declaration

// sumar();// la funcion puede ir antes o despues de definirla
// function sumar(numero = 2, numero2 = 2) {
//     console.log(numero + numero2)
// }


// function - function expression
// const sumar = function(numero, numero2) {
//     console.log(numero + numero2)
// }
// sumar(30, 20);// la funcion se debe de llamar despues de definirla, 

const sumar = function(numero, numero2) {
    return numero + numero2
}
const resultado = sumar(30, 20)
console.log(resultado)