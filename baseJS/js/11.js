//iterar entre los arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//forEach se va a ejecutar una vez por cada elemeto que hay en el arreglo
// tecnologias.forEach(function () {
//     console.log('ejecutando funcion')
// })// en la ejecucion aparece, ejecutando 5 funcion
// tecnologias.forEach(function (tech) {
//     console.log(tech);
// })// en la ejecucion aparece, cada uno de los elementos del arreglo, se recomienda que sea tech pero tambien puede ser una x o lo q sea

//me permite acceder a cada elemento del array
const arrayForeach = tecnologias.forEach(function (tech) {
    return tech
})
//map me permite crear un nuevo areglo


const arrayMap = tecnologias.map(function (tech) {
    return tech
})

console.log(arrayForeach);
console.log(arrayMap);