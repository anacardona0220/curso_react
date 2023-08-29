// function Header(){

//     return (
        
//         <h1>Desde Header</h1>
       
//     )
// }

// export default Header;

// import React from 'react'

// function formulario() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default formulario

// import React from 'react'
import {useState} from 'react'
const [cliente, setCliente] = useState({})
// //cliente es la variable que contiene el valor del estado,setcliente es el modificardor es la funcion que va a modificar la variable cliente(ninguna otro cliente)useState valor inicial es decir esta vacio, se ira llenando cuando se valla ejecutando la aplicacion, cuando se den cliemntes de alta o asi. con los corchetes estamos extrallendo tanto cliente como setcliente de la funcion de useState, es un distroctoring de arreglos y lo que esta adentro de usestate es el valor inicial que en este caso es un objeto, puedo tener multiples useState por componente

const formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5"> {/* md es el media query para tamaño mediano lg es el media query para pantallas mas grandes 2/5 es el 40%*/}
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-xl text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">{/*sombra,rondear bordes y un margin arriba y abajo para hacer el espacio blanco mas grande y derecha e izquierda para separarlo de los bordes*/}
        <div className="mb-5">
          <label htmlFor = "mascota" className="block text-gray-700 uppercase font-bold">{/*el For me permite que cuando de click en el label se active el imput al cual esta asociado por eso le pongo htmlFor porque for es palabra reservada de js y agrego el id al input "mascota" */}
            Nombre Mascota
          </label>
          <input 
            id = "mascota"
            type="text"
            placeholder="Nombre Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
          
        </div>
        <div className="mb-5">
          <label htmlFor = "propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Del Propietario
          </label>
          <input 
            id = "propietario"
            type="text"
            placeholder="Nombre Del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
          
        </div>

        <div className="mb-5">
          <label htmlFor = "email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id = "propietario"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          
        </div>
        <div className="mb-5">
          <label htmlFor = "date" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            id = "alta"
            type="date"// no requiere placeholder
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
          
        </div>
        <div className="mb-5">
          <label htmlFor = "sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
          />
        
          
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-color
          "
          value="Agregar Paciente" 
        />
      </form>
    </div>
  )
}

export default formulario

