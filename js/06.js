//destructuring con 2 o mas objetos
const producto = {
    nombre: 'tablet',
    precio : 300,
    disponible: true
}

const cliente = {
    nombre: 'juan',
    premium: true,
}
// destructuring 1 objeto
const {nombre, precio,disponible} = producto// crea y extrae el valor
// destructuring con 2 objetos
const {nombre: nombreCliente, premiun} = cliente//a nombre le estoy poniendo un alias
//porque no pueden haber 2 variables que se llamen igual

console.log(nombre, precio, disponible);
console.log(nombreCliente, premiun);
