//enviar un formulario o submit
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault()// se previene la accion por defaul que es enviarlo, es ideal para validar un formulario,despues de que pasan varia validaciones ya se puede enviar el usuario hacia otra pagina
    //vamos a crear un validador cencillo para este imput y este pasword
    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;
    // console.log(nombre.value)//lo quito de aca y lo pongo arriba y hace lo mismo
    if (nombre === '' || password === '') {

        console.log('todos los campos son obligatorios');
    }else {
        console.log('todo bien, enviando');
    }
})
