import './Main.css';
import backgroundImg from '../assets/planet_background.jpg';
import leia from '../assets/people_leia.png';
import planet from '../assets/deathstar_planet.png';
import atat from '../assets/ATAT.png';
import falcon from '../assets/millenium_falcon_starship.png';
import yoda from '../assets/species_yoda.png';
import Searchbar from '../../search/Search';
import Films from '../../categories/films/Films';

function Main() {
    function handleClick(){
        console.log('Hello');
        return (
            <Films/>
        )
        } 
        
    
    return (
        <div className='main-container'>
            <img classnName='bg-img' src={backgroundImg} alt="Planet in space" />
            <div className='flex'>
            <aside className='btn-section'>
            <div className='img-div'>
                <img className="icon-img" src={leia} alt='Princess Leia from Starwars' />
                <button className='films-btn' onClick={handleClick}>Films</button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={leia} alt='Princess Leia from Starwars' />
                <button className='people-btn'>People</button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={planet} alt='Deathstar pretending to be a planet' />
                <button className='planets-btn'>Planets</button>
            </div>
            </aside>
            <section><Searchbar /></section>
            <aside className='btn-section'>
            <div className='img-div'>
            <img className="icon-img" src={yoda} alt='Starwars alien species Yoda' />
                <button className='species-btn'>Species</button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={falcon} alt='Millenium Falcon' />
                <button className='starships-btn'>Starships</button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={atat} alt='ATAT Starwars vehicle' />
                <button className='vehicles-btn'>Vehicles</button>
            </div>
            </aside>
            </div>
        </div>
    )
}

export default Main;