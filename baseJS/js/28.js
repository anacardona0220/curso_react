// impors y expors en JS
//gracias a esta nueva api voy a poder dividir mi codigo en varias secciones,puede ser una de funciones, de clases, de configugacion, otro de helpers e irlos importando segun lo requiera en otros archivos
// import comoquieras from './funciones.js';//importamos la funcion de el archivo funciones ./ que es en la ubicacion actual,NOTA no se puede hacer un impor por fuera de un modulo para esto debo ir al index y agrgarle un atributo type='module'

// const resultado = comoquieras(20, 30)
// console.log(resultado);

import { sumar } from './funciones.js'//debe tener las llaves porque lo traje de un objeto, debe ser exactamnet igual
const resultado = sumar(20, 30);
console.log(resultado);

//si le quiero cambiar de nombre le tengo que poner un alias con un 'as'
import { sumar as suma } from './funciones.js'
const resultado1 = suma(20, 30);
console.log(resultado1);
