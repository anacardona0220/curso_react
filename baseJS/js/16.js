//todos estos no mutas en arreglo

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;
// filter me va a traer los que cumplan con la sentencia, se elimina el return por se una sola linea de codigo entre los corchetes 
nuevoArray = tecnologias.filter (tech => tech !== 'React')
   
// comprobar si un elemento existe en el array ,lo que pongamos en los parentesis (true o false)
const resultado = tecnologias.includes('React')
console.log(resultado)

// si al menos un elemento de un array cumple con una condicion
const resultado1 = numeros.some( numero => numero > 15)
console.log(resultado1)

//me devuelve el primer elemento que cumple la condicion
const resultado2 = numeros.find( numero => numero > 5)
console.log(resultado2)

//retorna verdadero o falso si todos cumplen la condicion
const resultado3 = numeros.every( numero => numero > 15)
console.log(resultado3)

//reduce, diseñado para cantidad, va acumulando en el total, utiliza dos parametros
const resultado4 = numeros.reduce((total, numero)=> numero + total, 0)
console.log(resultado4)

//filter, crea un nuevo array en base a una condicion
const resultado5 = tecnologias.filter( tech => tech === 'Node.js')
const resultado6 = numeros.filter( numero => numero > 15)
console.log(resultado5)
console.log(resultado6)

//me permite acceder a cada elemento del array
//lo uso cuando quiera iterar unicamente
tecnologias.forEach(tech => console.log(tech))
tecnologias.forEach((tech, index) => console.log(index))
//map me permite crear un nuevo areglo
//solo lo uso cuando quiera crear un nuevo arreglo


const arrayMap = tecnologias.map(tech => tech)
console.log(arrayMap)//nuevo arreglo llamado arrayMap

//EN LA CONSOLA EN PROTOTYPE ME PUEDO DAR CUENTA DE TODOS LOS METODOS QUE PUEDO UTILIZAR EN UN ARREGLO, TODOS ESTOS NO PUEDEN MUTAR O MODIFICA EL ARREGLO ORIGINAL QUE ES IMPORTANTISIMO EN REACT EN LA PAGINA DOES IT MUTATE ME DICEN CUALES MUTAN Y CUALES NO