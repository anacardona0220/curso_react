//enviar un formulario o submit
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault()
    
    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
        alertaPrevia.remove()   
    }

    const alerta = document.createElement('DIV')// recomendacion que en JS lo coloque en mayuscula
    alerta.id = 'Hola'// se me cre un id, con nombre hola, dentro de un div
    alerta.class = 'Hola'// no aparece nada cuando le doy login porque las clases tienen una api muy robusta para agregar clases, quitarlas o revisar si un a clase existe
    alerta.classList.add('alerta')// agregar la clase, para qgregar mas con una coma y otras comiillas
    
   
    
    if (nombre === '' || password === '') {

        alerta.textContent = 'Todos los campos son obligatorios'//para agregar contenido a esta alerta,esto va dentro del div, despues de las clases
        alerta.classList.add('error')
       
      
    } else {
     
        alerta.textContent = 'Todo esta bien'
        alerta.classList.add('exito')
    }
    formulario.appendChild(alerta)//agregar como hijo al formilario
})

//finalmente vamos a sacar el HTML de la consola, para mostrarlo en pantalla devemmos de quitar el console.log
//para esto vamos a utilizar un metodo que se llama appendChild
