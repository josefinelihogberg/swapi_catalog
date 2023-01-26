import './Main.css';
import backgroundImg from '../assets/planet_background.jpg';
import atat from '../assets/ATAT.png';
import Films from '../../categories/films/Films';
import People from '../../categories/people/People';
import Planet from '../../categories/planets/Planets';
import Species from '../../categories/species/Species';
import Starships from '../../categories/starships/Starships';

function Main() {
    return (
        <div className='main-container'>
            <img className='bg-img' src={backgroundImg} alt="Planet in space" />
            <div className='flex'>
            <aside className='btn-section'>
            <div className='img-div'>
            <Films/>
            </div>
            <div className='img-div'>
            <People />
            </div>
            <div className='img-div'>
            <Planet/>
            </div>
            </aside>
            <aside className='btn-section'>
            <div className='img-div'>
            <Species />
            </div>
            <div className='img-div'>
            <Starships />
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