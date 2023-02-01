import React, {useState} from 'react';
import './Main.css';
import backgroundImg from '../assets/planet_background.jpg';
import atat from '../assets/ATAT.png';
import camera from '../assets/movie-roll.png';
import leia from '../assets/people_leia.png';
import yoda from '../assets/species_yoda.png';
import death from '../assets/deathstar_planet.png';
import falcon from "../assets/millenium_falcon_starship.png";
import Films from '../../categories/Films';
import People from '../../categories/People';
import Planets from '../../categories/Planets';
import Species from '../../categories/Species';
import Starships from '../../categories/Starships';
import Vehicles from '../../categories/Vehicles'

function Main() {
    const [active, setActive] = useState("");
    return (
        <div className='main-container'>
            <img className='bg-img' src={backgroundImg} alt="Planet in space" />
            <div className='flex'>
            <aside className='btn-section'>
            <div className='img-div'>
            <img className="icon-img camera" src={camera} alt='camera-roll' />
            <button onClick ={()=> setActive("Films")}> Films </button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={leia} alt='Princess Leia from Starwars' />
            <button onClick ={()=> setActive("People")}> People </button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={death} alt='Princess Leia from Starwars' />
            <button onClick ={()=> setActive("Planets")}> Planets </button>
            </div>
            </aside>
            <aside className='btn-section'>
            <div className='img-div'>
            <img className="icon-img" src={yoda} alt='Yoda as example species from Starwars' />
            <button onClick ={()=> setActive("Species")}> Species </button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={falcon} alt='Princess Leia from Starwars' />
            <button onClick ={()=> setActive("Starships")}> Starships </button>
            </div>
            <div className='img-div'>
            <img className="icon-img" src={atat} alt='ATAT Starwars vehicle' />
            <button onClick ={()=> setActive("Vehicles")}> Vehicles </button>
            </div>
            </aside>
            </div>

            <div>
            {active === "Films" && <Films />}
            {active === "People" && <People />}
            {active === "Planets" && <Planets />}
            {active === "Species" && <Species />}
            {active === "Starships" && <Starships />}
            {active === "Vehicles" && <Vehicles />}
        </div>
        </div>
    )
}

export default Main;