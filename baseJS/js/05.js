// objetos, manipulacion
const producto = {
    nombre: 'tablet',
    precio : 300,
    disponible: true
}

// para que nadie pueda modificar este objeto
Object.freeze(producto)
//aca solo me deja modificar propiedades existentes pero no anadir ni elimina
Object.seal(producto)
//reescrive un valor
producto.nombre = 'tablet curve'

//si no existe lo crea

producto.imagen = 'img';
producto.edad = 4;
producto.deporte = 'caminar';

//eliminar 
delete producto.disponible


console.table(producto);