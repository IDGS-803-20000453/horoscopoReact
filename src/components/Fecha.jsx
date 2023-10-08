import React, { useState } from 'react';
import HoroscopoCard from './HoroscopoCard'; // Importamos el componente de la tarjeta del horóscopo

const Fecha = () => {
    const [fecha, setFecha] = useState(null);

    const capturar = (event) => {
        setFecha(new Date(event.target.value));
    };

    return (
        <div className="container">
            <div className="titulo">
            <h3>Horóscopo</h3>

            </div>
            <div className="fecha-container">
                <label>Escoja fecha de nacimiento</label>
                <label>Fecha de Nacimiento:</label>
                <input type="date" onChange={capturar} />
            </div>
            {fecha && <HoroscopoCard fecha={fecha} />}
        </div>
    );
    
};

export default Fecha;
