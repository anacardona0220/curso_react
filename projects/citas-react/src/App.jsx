// function App() {
//   // antes del retour podemos crear funciones, crear alguna validacion,mandar a llamra las funciones
//   // const sumar = () => {
//     // const numero = 5;
//     const edad = 17;

//     //   if(numero > 5) {
//     //     console.log("si es mayor");
//     //   } else {
//     //     console.log("no es mayor");
//     //   }
//     // }
//     // sumar();

//     return (
//       // dentro del return no pueden haber funciones, porque esto se va a imprimir en pantalla, aca puedo poner lo que usualmente se llama expresiones, son las que tiene algun operador, o algun ternario o alguno de los metodos para string etc.NO puedo colocar un if, ni una funcion
//       // si pongo 1 + 1, me sale eso en pantalla, pero si  pongo {1 + 1}, esto me lo vuelve codigo de JS, entonces el sistema va a reconocer en todo ese codigo HTML que eso es JS y en pantalla apareceria 2
//       <>
//         {/* {1 + 1} */}
//         { edad >= 18 ? 'eres mayor' : 'no eres mayor'}

//         <div>
//           {/* //este div es el nivel mas alto no puedo tener otro div aca porque me marcaria tambien error ya que solo se puede retornar uno en el nivel mas alto, para que me de debo de agregar otro div en un novel mas alto */}
//           <h1>{
//           edad}</h1>
//           <img src="cualquierimagen.jpg" />
//           <input type="text" />
//           <p>Un parrafo</p>
//         </div>
//         <div>
//           {/* //para no crear tantos div, podemos retornar un fragment <></>  */}
//           <h1>{'Hello World'.toLocaleUpperCase()}</h1>
//           <img src="cualquierimagen.jpg" />
//           <input type="text" />
//           <p>Un parrafo</p>

//         </div>
//       </>
//     )
//   }

//   //lo que este dentro del return es lo que se vera en pantalla, lo que este arriba seran funciones,validaciones(if,switch) etc

//   export default App
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/formulario"
function App() {
  return(
    <div className="container mx-auto mt-20"> 
    {/* mx-auto me lo centra crea la misma margen en la derecha y en la izquierda */}
    {/*  como me falta un pedazo de margen por abarcar me toca ponerle otra clase llamada mx(margen de izquierda a derecha, my margin arriba y abajo o mt que seria solamente magin arriva, mb,mr,ml) */}
      <Header />
      <div className="mt-12 md:flex "> {/* magintop me los separa un poco del titulo, el flex me los pone en la misma linea*/}

      <Formulario />
      <ListadoPacientes />
      </div>
    </div>
  )
}

  export default App