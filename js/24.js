//eventos de DOM - Clicks

const heading = document.querySelector('.heading');
heading.addEventListener('click', function() {//espera a que el evento suceda,segundo argumento es la funcion colba que es cuando se registre un evento que es lo que se va a ajecutar, addListener solo se puede usar pra el el retorno de un elemeto
    console.log('diste click en heading')
})

const heading2 = document.querySelector('.heading');
heading.addEventListener('click', () => {
    console.log('diste click en heading')
})

const heading3 = document.querySelector('.heading');
heading.addEventListener('click', clickHeading)

function clickHeading() {
    console.log('diste click en heading');
}

const heading4 = document.querySelector('.heading');
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click';
});

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach( enlace => { 
    enlace.addEventListener('click' , () => {
        console.log('Diste click en un elace')
    })
})


