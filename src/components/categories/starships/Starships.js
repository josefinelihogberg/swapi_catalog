import React, {useState, useEffect} from 'react';


function Starships() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [starship, setStarships] = useState([]);
    const [query, setQuery] = useState ("");

    const urls = [
        "https://swapi.dev/api/starships/?page=1",
        "https://swapi.dev/api/starships/?page=2",
        "https://swapi.dev/api/starships/?page=3",
        "https://swapi.dev/api/starships/?page=4",
    ]

    const getData = async()=>{
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
            console.log(`Error`, error)
        }
    };

       
    return (
        <div>
             <input className='search-input' placeholder='Search for starship...' 
            onChange = {event => setQuery(event.target.value)}></input>
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