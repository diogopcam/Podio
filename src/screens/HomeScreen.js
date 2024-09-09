import React from 'react';
import '../styles/HomeScreen.css';
import Logo from '../images/podio-logo.svg'
import AthleteScreen from './AthleteScreen';
import { Router, useNavigate } from 'react-router-dom';


function HomeScreen(){
    
    // Declaração do objeto utilizado para navegação de telas
    const navigate = useNavigate();
    // Função que altera a tela para a tela de pesquisa
    const handleScreenChange = () => {
        navigate('/SearchScreen')
    }
    return(
        <div>
            <div className="LogoText">
                <img className="Logo" src={Logo} onClick={handleScreenChange}/>
                <p className='Text'> Apoie os atletas do<br/>nosso país </p>
            </div>
            <div className='Description'> 
                <p> O PODIO é um projeto sem fins lucrativos que objetiva proporcionar uma central de informações segura e unificada sobre os atletas do nosso país. </p>
            </div>
        </div>
    )
}

export default HomeScreen;