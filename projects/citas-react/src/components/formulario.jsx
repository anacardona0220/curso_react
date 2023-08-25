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

const formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5"> {/* md es el media query para tamaño mediano lg es el media query para pantallas mas grandes 2/5 es el 40%*/}
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
    </div>
  )
}

export default formulario

