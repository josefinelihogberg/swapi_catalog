import React, {useState, useEffect} from 'react';
import loading from '../../UI/assets/loading.png';


function Starships() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [starship, setStarships] = useState([]);
    const [query, setQuery] = useState ("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");

    const urls = [
        "https://swapi.dev/api/starships/?page=1",
        "https://swapi.dev/api/starships/?page=2",
        "https://swapi.dev/api/starships/?page=3",
        "https://swapi.dev/api/starships/?page=4",
    ]

    const getData = async()=>{
        setIsLoading(true);
        try {
            const res = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            let data = res;
            let starshipsArray = [];
            for (let i = 0; i < data.length; i++) {
                let array = data[i].results; 
                for (let j = 0; j < array.length; j++) {
                    starshipsArray.push(array[j]);
                }
            }
            data = starshipsArray; 
            setStarships(data);
        } catch (error) {
            console.log(`Error`, error);
            setErr(`Something went wrong: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

       
    return (
        <div>
             <input className='search-input' placeholder='Search for starship...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div className='loading-error'>
                {err && <h2>{err}</h2>}
                {isLoading && <div className='jokes'><img src={loading} alt="loading icon" />
        <p>Is BB hungry?</p>
        <p>No, BB-8.</p></div>}
            </div>
            <div className="result">
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
            <div key = {starship.name}>
            <div className='info-title'>{starship.name}</div>
            <div className='info'>
            <p><span className='category'>Model:</span> {starship.model}</p>
            <p><span className='category'>Length:</span>  {starship.length} m</p>
            <p><span className='category'>Cargo Capacity:</span>  {starship.cargo_capacity}</p>
            <p><span className='category'>Consumables:</span>  {starship.consumables}</p>
            <p><span className='category'>Crew:</span>  {starship.crew} crewmember(s)</p>
            <p><span className='category'>Passengers:</span>  {starship.passengers} passanger(s)</p>
            <p><span className='category'>Cost:</span>  {starship.cost_in_credits} credits</p>
            <p><span className='category'>Manufacturer:</span>  {starship.manufacturer}</p>
            </div>
            </div>
        ))}
      </div>,
        </div>
    )
}

export default Starships; 