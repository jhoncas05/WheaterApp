import React from 'react';
import { WiDaySunny, WiCloudy } from 'react-icons/wi'; // Importa los íconos que necesites

// Datos de pronóstico del clima de ejemplo
const weatherData = [
  { date: 'Lunes', weather: 'Sunny' },
  { date: 'Martes', weather: 'Cloudy' },
  { date: 'Miércoles', weather: 'Sunny' },
  { date: 'Jueves', weather: 'Sunny' },
  { date: 'Viernes', weather: 'Cloudy' },
  { date: 'Sábado', weather: 'Sunny' },
  { date: 'Domingo', weather: 'Cloudy' },
];

export const Main = () => {
  if (!weatherData) {
    return <div>Cargando datos del clima...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-start p-4"> {/* Aquí eliminamos la transformación skew-y-[-8deg] */}
      {weatherData.map((day, index) => (
        <div key={index} className="bg-[#1E1E1E] m-4 p-4 rounded shadow-lg flex flex-col items-center text-white text-2xl h-[200px]">
          {/* Aquí eliminamos la transformación skew-y[8deg] */}
          <h2 className="font-bold mb-2">{day.date}</h2>
          <p className="mb-2">{day.weather}</p>
          {day.weather === 'Sunny' ? <WiDaySunny size={30} /> : <WiCloudy size={30} />}
          {/* Asegúrate de reemplazar 'Sunny' y 'Cloudy' con los valores que estás utilizando */}
        </div>
      ))}
    </div>
  );
};
