import React from 'react';
import ReactDOM from 'react-dom';
import AthleteScreen from './AthleteScreen'; // Componente principal da sua aplicação

// Renderiza o componente principal (App) no elemento com id 'root' no HTML
ReactDOM.render(
  <React.StrictMode>
    <AthleteScreen />
  </React.StrictMode>,
  document.getElementById('root')
);