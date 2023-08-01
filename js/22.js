//selectores del HTML

const headings = document.querySelector('h2');//queryselector solo me va a retornar un elemento
console.log(headings)

const headings1 = document.querySelector('.DOM h2');
console.log(headings)

const headings2 = document.querySelector('.headings');
console.log(headings)

const headings3 = document.querySelector('#headings');
console.log(headings)

console.log(headings.textContent)
console.log(headings.tagName)// el tipo de h que tiene
console.log(headings.classList)// que clases tiene
console.log(headings.id)// qie id

const enlaces = document.querySelector('.navegacion a');
console.log(enlaces);// solo me da un enlace

const enlaces1 = document.querySelectorAll('.navegacion a');

console.log(enlaces)