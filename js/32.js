//template strings

const producto = 'tablet de 12 pulgadas'
const precio = 400
const marca = 'orange'
//tambien puedo agrgarle el resultado de una funcion
function textoFunction(){
    return 'este texto proviene de una funcion'
}
console.log(producto + ' $' + precio  + ' dolares, marca ' + marca);
console.log(producto, ' $', precio, ' dolares, marca ', marca);

console.log(`la ${producto} tiene un valor de: $${precio} dolares y es de marca ${marca}, ${textoFunction()}`);//backtick