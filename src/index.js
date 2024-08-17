import React from 'react';
import ReactDOM from 'react-dom';
import AthleteScreen from './AthleteScreen'; // Componente principal da sua aplicação
import HomeScreen from './HomeScreen';

// Renderiza o componente principal (App) no elemento com id 'root' no HTML
ReactDOM.render(
  <React.StrictMode>
    {/* <AthleteScreen /> */}
    <HomeScreen> </HomeScreen>
  </React.StrictMode>,
  document.getElementById('root')
);