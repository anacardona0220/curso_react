function sumar(numero1, numero2) {
return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
    }

// export default sumar;// registra la funcion y despues le estamos diciendo que la exporte para que la podamos importar de otros archivos, si la llamo defaul la puedo luego llamar comoquiera en el otro archivo pero no puedo tener mas de una que se llame default
// export default restar;// no se puede porque ya tengo una default

//si quiero exportar mas de una funcion debo hacerlo como si fuera un objeto

export {//basicamente este es un objeto, y el nombre si importa para poderla importar del otro archibo tambien lo debo hacer entre llaves
    sumar,
    restar
}