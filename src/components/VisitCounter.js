import React, { useEffect, useState } from 'react';

function Visitas() {
    const [visitas, setVisitas] = useState(0);

    // Función para obtener visitas desde el backend
    const fetchVisitas = async () => {
        try {
            const response = await fetch('https://api.tiquidevs.click/api/visitas/list');
            const data = await response.json();
            console.log(data.data[0].visitas ,'dad');
            setVisitas(data.data[0].visitas);
        } catch (error) {
            console.error('Error al obtener visitas:', error);
        }
    };

    // Función para incrementar visitas
    const incrementarVisitas = async () => {
        try {
            const response = await fetch('https://api.tiquidevs.click/api/visitas/update', {
                method: 'POST',
            });
            const data = await response.json();
            setVisitas(data.data[0].visitas);
        } catch (error) {
            console.error('Error al incrementar visitas:', error);
        }
    };

    // Obtener visitas al cargar el componente
    useEffect(() => {
      const registrarVisita = async () => {
          await incrementarVisitas(); // Incrementa visitas automáticamente al cargar
          await fetchVisitas(); // Obtiene las visitas actualizadas
      };
      registrarVisita();
  }, []);
    return (
        <div>
            <h1  style={{ color: 'white' }}>Contador de Visitas</h1>
            <p  style={{ color: 'white' }}>Total de visitas: {visitas}</p>
             
        </div>
    );
}

export default Visitas;
