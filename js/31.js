//como se realizan diferentes llamado a Async Await,es muy comun que nuestra aplicacion se conecte de diferentes servidores,y veremos como hacerlo
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'
const consultarAPI = async () => {//ya puedo sacar todos los beneficios de  await
    //ahora vamos a medir el performance, es decir el tiempo de ejecucion,lo mediremos con la API de performance 
    const  inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    // console.log(resultado);

    // console.log('iniciando segunda consulta...');// puedo ver que no estan iniciando al mismo tirmpo gracias al async away comienza con una linea,luego la otra y asi, para iniciarlo en paralelo vamos a hacer lo siguiente

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    // console.log(resultado2);

    const fin = performance.now()

    console.log(`ejecucion PRIMER async: ${fin - inicio} ms`);// template string, es la forma en la que puedo mesclar un string con variables,detecta el texto y luego detecta una sintaxis he inyecta una variable


}
consultarAPI()
// en lugar de ponerlas en un await las vamos a meter en un promise
const consultarAPI1 = async () => {
    //aca estoy aplicando array destructuring(desestructuracion de matrices),aplicamos await porque no sabemos cuanto tiempo va a tardarle realizar el fetch1 y el fetch 2 y cuando van a estar listos, van a iniciar al mismo tiempo aunque uno va a estar primero que el otro por su tamaño, en este codigo arrancan al mismo tiempo, en el anterior arancaba hasta que habia terminado el primero
    const  inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([ fetch(url), fetch(url2) ])//creo un arreglo con los 2 fetch y por ser el promise.all los arranca los dos al mismo tiempoe
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    // console.log(resultado);
    // console.log(resultado2);

    const  fin = performance.now()
    console.log(`ejecucion SEGUNDA async: ${fin - inicio} ms`);


}
consultarAPI1()