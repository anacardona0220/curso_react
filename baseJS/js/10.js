//destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
// para extraer en arrays, este extrae por posiciones
const [html, nodejs] = tecnologias// se asocian automaticamente segun la posicion de indice
// const [var1, var2, var3, var4, var5] = tecnologias// se asocian automaticamente segun la posicion de indice


// console.log(html);// esto me imprime HTML porque es el de la primera posicion
// console.log(nodejs);// esto me imprime CSS porque es el de la segunda posicion
// console.log(var1);// esto me imprime CSS porque es el de la segunda posicion
// console.log(var2);// esto me imprime CSS porque es el de la segunda posicion
// console.log(var3);// esto me imprime CSS porque es el de la segunda posicion
// console.log(var4);// esto me imprime CSS porque es el de la segunda posicion
// console.log(var5);

const cliente = {
    nombre: 'ana',
    tipo: 'premium'
}

const { tipo } = cliente//extraer tipo, es decir premium
console.log(tipo)

// para extraer la ultima posicion del arreglo

const [ , , , , var5] = tecnologias
console.log(var5)
