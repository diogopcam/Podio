import '../styles/AthleteScreen.css';
import React from 'react';
import PodioLogo from '../images/podio-logo.svg';
import Hugo from '../images/hugo-calderano-tenis-de-mesa-jogos-olimpicos-paris-2024 1.png';

function AthleteScreen() {
  return (
    <div className='FullScreen'>
      <div className="MenuSide">
        <img className='PodioLogo' src={PodioLogo} alt='Logo do site.'/>
        <div className='Options'>
          {/* <div> <p className='OptionsText'> Sobre o Podio </p> </div>
          <div> <p className='OptionsText'> Atletas </p> </div>
          <div> <p className='OptionsText'> </p> </div> */}
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
