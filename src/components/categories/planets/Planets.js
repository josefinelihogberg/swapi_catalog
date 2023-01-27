import React, {useState} from 'react';
import "./Planets.css";
import death from "../../UI/assets/deathstar_planet.png";

function Planets() {
    const [planet, setPlanet] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

        const getData = async() => {
            const res = await fetch("https://swapi.dev/api/planets/");
            const data = await res.json();
            console.log(data);
            setPlanet(data.results);
        };

    return (
        <div>
            <div className='img-div'>
            <img className="icon-img" src={death} alt='Princess Leia from Starwars' />
            <button onClick={getData}>Planets</button>
            </div>
            <div className="result" onClick={() => setIsVisible(false)} style = {{ display: isVisible ? "block" : "none"}}>
        {planet.map((planet) => (
            <div key = {planet.name} className='info'>
            <div>{planet.name}</div>
            
            <div>
            <p >Classification: {planet.classification}</p>
            <p >Height: {planet.average_height}</p>
            <p >Lifespan: {planet.average_lifespan}</p>
            </div>
           
            </div>
        ))}
      </div>
        </div>
    )
}

export default Planets; 