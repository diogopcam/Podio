import App from './App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import AthleteScreen from './screens/AthleteScreen'; // Componente principal da sua aplicação
import HomeScreen from './screens/HomeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);