import './Main.css';
import backgroundImg from '../assets/planet_background.jpg';
import Searchbar from '../../search/Search';
import Films from '../../categories/films/Films'

function Main() {
    function handleClick(event){
        const button = event.target;
        if(button.className === 'films-btn') {
            return(
                <Films />
            )
        } 
        }
    
    return (
        <div className='main-container'>
            <img src={backgroundImg} alt="Planet in space" />
            <div className='flex'>
            <aside className='btn-section'>
            <div>
                {/* <img></img> */}
                <button className='films-btn' onClick={handleClick}>Films</button>
            </div>
            <div>
                {/* <img></img> */}
                <button className='people-btn'>People</button>
            </div>
            <div>
                {/* <img></img> */}
                <button className='planets-btn'>Planets</button>
            </div>
            </aside>
            <section><Searchbar /></section>
            <aside className='btn-section'>
            <div>
                {/* <img></img> */}
                <button className='species-btn'>Species</button>
            </div>
            <div>
                {/* <img></img> */}
                <button className='starships-btn'>Starships</button>
            </div>
            <div>
                {/* <img></img> */}
                <button className='vehicles-btn'>Vehicles</button>
            </div>
            </aside>
            </div>
        </div>
    )
}

export default Main;