import React from 'react';

const FirstScreen = () => {
    return (
        <div className="dashboard" style={{
            display: 'flex',             // Cambiado a comillas simples y minúscula 'd'
            flexDirection: 'column',     // Asegura que los elementos se apilen verticalmente
            alignItems: 'center',        // Centra horizontalmente dentro del div
            justifyContent: 'center',    // Centra verticalmente dentro del div
            minHeight: '100vh',          // Altura mínima para tomar toda la pantalla
            color: '#fff',               // Color de texto blanco
            backgroundColor: '#282c34',  // Color de fondo
            fontSize: 'calc(10px + 2vmin)', // Tamaño de fuente dinámico
            textAlign: 'center'          // Centrado de texto
        }}>
            <header className="dashboard-header">
                <h1 style={{
                    margin: '0'  // Elimina márgenes predeterminados para h1
                }}>Software de Censo</h1>
            </header>
        </div>
    );
}

export default FirstScreen;
