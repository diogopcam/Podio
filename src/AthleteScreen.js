import './AthleteScreen.css';
import React from 'react';
import OlympicsSymbol from './images/olympics-1.svg'
import PodioLogo from './images/podio-logo.svg';
import Hugo from './images/hugo-calderano-tenis-de-mesa-jogos-olimpicos-paris-2024 1.png';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://diogpcam:diogpcam@bdii.rc49qpd.mongodb.net/?retryWrites=true&w=majority&appName=BDII";

function AthleteScreen() {
  return (
    <div className='FullScreen'>
      <div className="MenuSide">
        <img className='PodioLogo' src={PodioLogo} alt='Logo do site.'/>
        <div className='Options'>
          <div className='BlueLine'> <p className='OptionsText'> Sobre o Podio </p> </div>
          <div className='GreenLine'> <p className='OptionsText'> Atletas </p> </div>
          <div className='YellowLine'> <p className='OptionsText'> </p> </div>
        </div>
      </div>
      <div className='AthleteSide'>
        <p className='Name'> Hugo Calderano </p>
        <p className='Practice'> Mesa-tenista </p>
          <img className='AthleteImage' src={Hugo} alt='Imagem do atleta.'/> 
      </div>
    </div>
  );
}

export default AthleteScreen;
