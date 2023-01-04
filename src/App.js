import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';


function App() {

  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    //const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await fetch("https://jsonplaceholder.typicode.com/users/")

    const users = await data.json()
    console.log(users)
    setEquipo(users)
  }

  return (
    <>
      <div className="App">
        <h1>CONSUMO DE API CON MAP PASANDO A UN COMPONENTE</h1>
        <>
          {equipo.map((parametro, index) =>
            <Pokemon
              key={index}
              id={parametro.id}
              url={parametro.url}
              name={parametro.name}
              nombre="frank"
            />)}
        </>
      </div>
    </>
  );
}

export default App;
