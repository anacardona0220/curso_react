// unir 2 objetos o mas en JS
const producto = {
    nombre: 'tablet',
    precio : 300,
    disponible: true
}

const cliente = {
    nombre: 'juan',
    premium: true,
}

//crear un nuevo objeto, y esto me va a devolver un nuevo objeto para enviar a la consola

// const nuevoObjeto = Object.assign(producto, cliente);//este si modifica valores
// express operator no modifica ningunvalor
// const nuevoObjeto2 = {...cliente, ...producto}//aca retornamos un objeto haciendo una copia de los dos objetos
const nuevoObjeto3 = {
    producto: {...producto},//entre llaves por que son objetos
    cliente: {...cliente}
}

console.log(nuevoObjeto);
// console.log(cliente);
// console.log(producto);