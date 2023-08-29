// function ListadoPacientes() {
//     return (
//         <h2>Listado Pacientes</h2>
//     )
// }

import Paciente from "./Paciente";

// export default ListadoPacientes;

const ListadoPacientes = () => {
    return (
            <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">{/*h-screen me va a forzar a que tenga un tamaño, overflow-y-scroll quiere decir que me ponga un scroll de arriba hacia abajo para que no se me pierda el fomulario mientras miro los pacientes, con el md en el scroll lo elimino para pantallas mas pequeñas para que solo quede uno */}

                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administras tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                <Paciente />
                <Paciente />
                <Paciente />
             
            </div>
        
    )
}
export default ListadoPacientes;