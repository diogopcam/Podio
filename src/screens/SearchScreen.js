import '../styles/SearchScreen.css';
import PodioLogo from '../images/podio-logo.svg';

function SearchScreen() {
    return (
        <div> 
        <img className="PodioLogo" src={PodioLogo}/>
        <input className='SearchComponent'/> 
        </div>
    );
}

export default SearchScreen;