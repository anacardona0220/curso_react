//Fetch API con Async Await, cuando utilizo esto las funciones deben ser asincronas
//vamos a ver como pasar de promises a async await, esto simplifica mas el codigo
// const consultarAPI = () => {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then((resultado) => {
//             resultado.forEach( comentario => {
//                 console.log(comentario);
//         })
//     })

// }
// consultarAPI();
const url = 'https://jsonplaceholder.typicode.com/comments'
// const consultarAPI = async () => {//ya puedo sacar todos los beneficios de  await
//     const respuesta = await fetch(url)
//     const resultado = await respuesta.json()
//     resultado.forEach(comentario => {
        
//         console.log(comentario)
//     });

// }
// consultarAPI();//este codigo es mas compacto y me muestra tambn la cantidaD DE COMENTARIOS y los comentarios

const consultarAPI1= async () => {//ya puedo sacar todos los beneficios de  await
    const respuesta = await fetch(url)
    console.log('despuesde respuesta');//no ejecuta las lineas inmediatamente sino despues de que estan listas
    const resultado = await respuesta.json()
    console.log('despues de resultado');
    
}
consultarAPI1();