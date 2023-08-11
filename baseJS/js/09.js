//operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
//anadir elementos de array
// tecnologias.push('GraphQL')// anade al final
// tecnologias.unshift('GraphQL')// anade al principio 
// const nuevoArreglo = [...tecnologias, 'GraphQL']//no se modifica el arreglo original y el elemento nuevo se posiciona al fina
const nuevoArreglo = ['GraphQL', ...tecnologias]
//eliminar elementos del array
// tecnologias.pop()//elimina al final
// tecnologias.shift()//elimina al inicio
// tecnologias.splice(2)//elimina desde la posicion 2 en adelante
// tecnologias.splice(2,1)//elimina solo Javascript
// tecnologias.splice(2,2)//elimina solo Javascript y react
const nuevoArray = tecnologias.filter(function(tech){return tech !== 'HTML'})//ejecuta una funcion, filter lo que hace es ejecutarse una vez por cada elemento del arreglo
//tambien itera entre ellos y automaticamente se pasa a la funcion cada elemento
//lo que hace tech es retornarme todas las tecnologias diferentes a HTML

//reemplazar o modificar elementos del array
// tecnologias[0] = 'GraphQL'
const nuevoArray1 = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }

})
// });
console.table(tecnologias);
// console.table(nuevoArreglo);
// console.table(nuevoArray);
console.table(nuevoArray1);