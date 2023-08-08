// como leer los input en JS
// const inputNombre = document.querySelector('.nombre');
// inputNombre.type = 'password';

// const inputNombre1 = document.querySelector('.nombre');
// inputNombre1.addEventListener('input' , function() {//input copio, o borro o pego y se esta capturando todo tipo de evento
//     console.log('escribiendo en el input');
// })

// const inputNombre2 = document.querySelector('.nombre');
// inputNombre2.addEventListener('keydown' , function() {//cuando ecribo opreciono una tecla se ejecuta
//     console.log('escribiendo en el input');
// })

// const inputNombre3 = document.querySelector('.nombre');
// inputNombre3.addEventListener('keyup' , function() {//se ejecuta cuando levanto el dedo de presionar la tacla
//     console.log('escribiendo en el input');
// })

// const inputNombre4 = document.querySelector('.nombre');
// inputNombre4.addEventListener('input' , function(e) {//me imprime el evento lo puedo encontrar como evento,evt,e,eventl yo lo nombro como quiera
//     console.log(e);
// })

const inputNombre5 = document.querySelector('.nombre');
inputNombre5.addEventListener('input' , function(e) {
    console.log(e.target.value);//viene el imput completo, y con el value compruebo todo lo que el usuario esta copeando
})

// const inputPassword = document.querySelector('.password')
// inputPassword.addEventListener('input' , funcionPassword)

// function funcionPassword(e){
//     console.log(e.target.value)// escribo en el espacio de la clave y lo puedo ver en la consola
// }

// escribo en el espacio de la clave y lo puedo ver en la consola, pero si no quiero estar mirando la consola, sino viendo la pantalla
const inputPassword1 = document.querySelector('.password')
inputPassword1.addEventListener('input' , funcionPassword)

function funcionPassword(){
    inputPassword1.type = 'text'
    setTimeout (() => {
        inputPassword1.type = 'password'
    }, 1000);//le voy poner los segundos que necesito que se vea cada letra que pongo en la contraseña (1 segundo, seria 1000)
}