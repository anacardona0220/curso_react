//selectores del HTML

const headings = document.querySelector('h2');//queryselector solo me va a retornar un elemento
console.log(headings)

const headings1 = document.querySelector('.DOM h2');
console.log(headings)

const headings2 = document.querySelector('.headings');
console.log(headings)

const headings3 = document.querySelector('#headings');
console.log(headings)
// si puedo acceder a cada uno sin iterar
console.log(headings.textContent)
console.log(headings.tagName)// el tipo de h que tiene
console.log(headings.classList)// que clases tiene
console.log(headings.id)// qie id

const enlaces = document.querySelector('.navegacion a');
console.log(enlaces);// solo me da un enlace

const enlaces1 = document.querySelectorAll('.navegacion a');
// cuando es una coleccion de elementos para acceder a uno de ellos debo de itrar en ellos

console.log(enlaces1)