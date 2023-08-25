import React from 'react';
import '../componentes/hojas-de-estilo/Boton.css';

function Boton({ texto, esbotonDeClic, manejarClick }) {
  return (
    <button
      className={esbotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
