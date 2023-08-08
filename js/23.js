//manipular elementos de HTML cin JS 
const heading = document.querySelector('.heading');
heading.textContent = 'Un Nuevo Heading';
console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'un valor por default'; //tiene mas peso JS si en el HTML TENGO OTRO VALOR JS lo reescribe
console.log(inputNombre);
// voy a seleccionar todos los enlaces
const enlaces = document.querySelectorAll('.navegacion a');
// enlaces.textContent = 'nuevo enlaces';// no va a pasar nada porque tengo que iterar sobre cada uno
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlaces');
    
