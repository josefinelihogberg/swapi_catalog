import './Main.css';
import Films from '/components/categories/films/Films'
import backgroundImg from '../assets/planet_background.jpg';

function Main() {
    return (
        <div className='main-container'>
            <img src={backgroundImg} alt="Planet in space" />
            <section className='btn-section'>
            <Films />
            <div>
                {/* <img></img> */}
                <button className='people-btn'>People</button>
            </div>
            <div>
                {/* <img></img> */}
                <button className='planets-btn'>Planets</button>
            </div>
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
            </section>
        </div>
    )
}

export default Main;