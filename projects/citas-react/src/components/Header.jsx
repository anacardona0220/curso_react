//todods los componentes comiensa en mayuscula, como vamos a trabajar con vite se le pone.jsx si fuera create_react_app podria se .js o .jsx
// un componente es una funcion
import React from 'react';
const Header = () => {

    return (
       
            <h1 className='font-black text-5xl text-center md:w-3/5 mx-auto'>{/* negrita,tamaño,centrado, centrado y with 50% */}
                Seguimiento Pacientes {''}{/*agrega un espacio en blanco y anuncia que viene codigo js */}
                <span className='text-indigo-600'>Veterinaria</span>
            </h1>
            
       
      
       
    )
}

export default Header; //para poderlo importar a App.jsx