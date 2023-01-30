import React, {useState, useEffect} from 'react';



function Planets() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [planet, setPlanets] = useState([]);
    const [query, setQuery] = useState ("");

    const urls = [
        "https://swapi.dev/api/planets/?page=1",
        "https://swapi.dev/api/planets/?page=2",
        "https://swapi.dev/api/planets/?page=3",
        "https://swapi.dev/api/planets/?page=4",
        "https://swapi.dev/api/planets/?page=5",
        "https://swapi.dev/api/planets/?page=6"
    ]

    const getData = async()=>{
        try {
            const res = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            // console.log(res);
            let data = res;
            let planetsArray = [];
            for (let i = 0; i < data.length; i++) {
                let array = data[i].results; 
                console.log(data[i].results);
                for (let j = 0; j < array.length; j++) {
                    planetsArray.push(array[j]);
                }
            }
            data = planetsArray; 
            setPlanets(data);
        } catch (error) {
            console.log(`Error`, error)
        }
    };

    return (
        <div>
            <input className='search-input' placeholder='Search for a planet...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div>
            </div>
            <div className="result">
        {planet.filter(planet => {
                if (query === "") {
                    return planet;
                } else if (planet.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(planet)
                    return planet;
                } else {
                    return false;
                };
            }).map((planet) => (
            <div key = {planet.name} className='info'>
            <div>{planet.name}</div>
            
            <div>
            <p >Diameter: {planet.diameter}</p>
            <p >Days in a Year: {planet.orbital_period}</p>
            <p >Climate: {planet.climate}</p>
            <p >Terrain: {planet.terrain}</p>
            </div>
           
            </div>
        ))}
      </div>
        </div>
    )
}

export default Planets; 