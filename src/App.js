import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecampLogo.png'; // Cambiado el nombre del archivo a "freecodecampLogo.png"

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() { 

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1); // Cambiado setNumClicks a setNumClics
  }
  const reiniciarContador = () => {
    setNumClics(0); // Cambiado setNumClic a setNumClics
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} /> {/* Cambiado numClics */}
        <Boton
          texto='clic'
          esbotonDeClic={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esbotonDeClic={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
