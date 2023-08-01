// funciones - arrow functions

// const sumar = function() {
//     console.log(numero + numero2)
// }

const sumar = () => {
    console.log(2 + 2)
}

sumar()


const sumar1 = (numero = 0, numero2 = 0) => {
    console.log(numero + numero2)
}

sumar1(10 + 10)

//si solo tengo una linea de codigo puedo eliminar las llaves y poner el return despues de la flecha y no es necesario poner el return ya esta implicito
const sumar2 = (numero = 0, numero2 = 0) => numero + numero2


const resultado = sumar2(10 + 20)
console.log(resultado)

//si quiero eliminar un parametro puedo eliminar los parentesis de los argumentos, solo si hay un parametro
const sumar3 = numero => numero + 30


const resultado3 = sumar3(10)
console.log(resultado3)

const sumarArrow = () => 2 + 2
const resultado4 = sumarArrow()
console.log(resultado4)