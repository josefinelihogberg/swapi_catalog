import React, {useState} from 'react';
import falcon from "../../UI/assets/millenium_falcon_starship.png";

function Starships() {
    const [starship, setStarship] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [query, setQuery] = useState ("");

        const getData = async() => {
            const res = await fetch("https://swapi.dev/api/starships/");
            const data = await res.json();
            console.log(data);
            setStarship(data.results);
        };

        function HandleClick() {
            getData()
            setIsVisible(true)
        }
    return (
        <div>
            <div className='img-div'>
            <input placeholder='Search..' onChange = {event => setQuery(event.target.value) }/>
            <img className="icon-img" src={falcon} alt='Princess Leia from Starwars' />
            
            <button onClick={HandleClick}>Starships</button>
            </div>
            
            
            <div className="result" onClick={() => setIsVisible(false)} style = {{ display: isVisible ? "block" : "none"}}>
            {starship.filter(starship => {
                if (query === "") {
                    return starship;
                } else if (starship.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(starship)
                    return starship;
                } else {
                    return false;
                }
            }).map((starship) => (
            <div key = {starship.name} className='info'>
            <div>{starship.name}</div>
            <div>
            <p >Model: {starship.model}</p>
            <p >Cargo Capacity: {starship.cargo_capacity}</p>
            <p >Crew: {starship.crew}</p>
            <p >Passengers: {starship.passengers}</p>
            <p >Manufacturer: {starship.manufacturer}</p>
            </div>
            </div>
        ))}
      </div>,
        </div>
    )
}

export default Starships; 