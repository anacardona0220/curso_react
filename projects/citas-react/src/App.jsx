function App() {
  return (
    <>

    <div>
      {/* //este div es el nivel mas alto no puedo tener otro div aca porque me marcaria tambien error ya que solo se puede retornar uno en el nivel mas alto, para que me de debo de agregar otro div en un novel mas alto */}
      <h1>Hello World</h1>
      <img src="cualquierimagen.jpg" />
      <input type="text" />
      <p>Un parrafo</p>
      </div>
       <div>
        {/* //para no crear tantos div, podemos retornar un fragment <></>  */}
       <h1>Hello World</h1>
       <img src="cualquierimagen.jpg" />
       <input type="text" />
       <p>Un parrafo</p>

       </div>
    </>
      )
}

export default App
