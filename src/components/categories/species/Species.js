import React, {useState} from 'react';
import "./Species.css";
import yoda from "../../UI/assets/species_yoda.png"


export default function Species() {
    const [species, setSpecies] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    

        const getData = async() => {
            const res = await fetch("https://swapi.dev/api/species/");
            const data = await res.json();
            console.log(data);
            setSpecies(data.results);
        };

  return (
    <div>
      <div className='img-div'>
        <img className="icon-img" src={yoda} alt='Yoda as example species from Starwars' />
        <button onClick={getData}>Species</button>
      </div>
      <div className="result" onClick={() => setIsVisible(false)} style = {{ display: isVisible ? "block" : "none"}}>
        {species.map((species) => (
            <div key = {species.name} className='info'>
            <div>{species.name}</div>
            
            <div>
            <p >Classification: {species.classification}</p>
            <p >Height: {species.average_height}</p>
            <p >Lifespan: {species.average_lifespan}</p>
            </div>
           
            </div>
        ))}
      </div>,
    </div>
  )
};
