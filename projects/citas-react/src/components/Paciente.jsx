const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">Ana</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">20 de febrero de 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laudantium sint nemo, numquam non placeat ex repellendus sapiente accusamus itaque nulla sunt modi reiciendis harum eos tempora! Laudantium, incidunt sunt?</span>
            </p>
        </div>


    )
}

export default Paciente
