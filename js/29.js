// Fetch API
//es una forma en la que puedo consumir una API o un servicio que esta hospedado en otro servidor react por si solo no puede consultar una base de datos, porque seria muy inseguro,la solucion es crear una API que de una respuesta como JSON y asi JS o react pueden consumirla,y para no perder tiempo creando una API vamos a utilizar una aploicacion o la pagina de JSON Placeholder
const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url).then((respuesta) => {
//     console.log(respuesta);
// })//viene nativo en el navegador, es una funcion y toma la url en la que vamos a hacer la consulta,muchas apices trabajan con algo llamado promises que son valores que estan disponobles ahora o en el futuro

// fetch(url)
//     .then((respuesta) => {
//     return respuesta.json()//en el prototipo de esta funcion esta json como opcion
// })
//     // .then((resultado) => {
//     //     console.log(resultado);//me aparece la cantidad de comentarios que tengo, es decir el tamaño
//     .then((resultado) => {
//         resultado.forEach( comentario => {
//             console.log(comentario);
//         })
//         // si quiero que me muestre cada uno de los comentarios debo de iterar en ellos
// })

// //puedo acortar mi codigo de la siguiente manera
// fetch(url)
//     .then(respuesta => respuesta.json())//como es un arroun function y solo tiene un parametro le puedo eliminar un parentesis, como solo tiene una sola linea y es un return lo puedo eliminar y darlo por implicito, la llave tambn
//     .then((resultado) => {
//         resultado.forEach( comentario => {
//             console.log(comentario);
//     })
// })
// generalmente esto lo voy a colocar en una funcion
const consultarAPI = () => {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            resultado.forEach( comentario => {
                console.log(comentario);
        })
    })

}
consultarAPI();