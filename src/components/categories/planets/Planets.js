import React, {useState, useEffect} from 'react';



function Planets() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [planet, setPlanets] = useState([]);
    const [query, setQuery] = useState ("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");

    const urls = [
        "https://swapi.dev/api/planets/?page=1",
        "https://swapi.dev/api/planets/?page=2",
        "https://swapi.dev/api/planets/?page=3",
        "https://swapi.dev/api/planets/?page=4",
        "https://swapi.dev/api/planets/?page=5",
        "https://swapi.dev/api/planets/?page=6"
    ]

    const getData = async()=>{
        setIsLoading(true)
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
            console.log(data);
            data = planetsArray; 
            setPlanets(data);
        } catch (error) {
            console.log(`Error`, error);
            setErr(`Something went wrong: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <input className='search-input' placeholder='Search for a planet...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div className='loading-error'>
            {err && <h2>{err}</h2>}
            {isLoading && <h2>Loading...</h2>}
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
            <div key = {planet.name}>
            <div className='info-title'>{planet.name}</div>
            
            <div className='info'>
            <p><span className='category'>Diameter:</span> {planet.diameter}</p>
            <p><span className='category'>Orbital period:</span>  {planet.orbital_period} days</p>
            <p><span className='category'>Rotation period:</span>  {planet.rotation_period} hours</p>
            <p><span className='category'>Climate:</span>  {planet.climate}</p>
            <p><span className='category'>Terrain: </span> {planet.terrain}</p>
            <p><span className='category'>Population:</span>  {planet.population} beings</p>
            </div>
           
            </div>
        ))}
      </div>
        </div>
    )
}

export default Planets; 