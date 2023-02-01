import React, { useState, useEffect} from 'react';
import loading from '../UI/assets/loading.png';

export default function Vehicles() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

const [vehicle, setVehicles] = useState([]);
const [query, setQuery] = useState ("");
const [isLoading, setIsLoading] = useState(false);
const [err, setErr] = useState("");

const urls = [
    "https://swapi.dev/api/vehicles/?page=1",
    "https://swapi.dev/api/vehicles/?page=2",
    "https://swapi.dev/api/vehicles/?page=3",
    "https://swapi.dev/api/vehicles/?page=4",
    
]

    const getData = async()=>{
        setIsLoading(true);
        try {
            const res = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            let data = res;
            let vehiclesArray = [];
            for (let i = 0; i < data.length; i++) {
                let array = data[i].results; 
                // console.log(data[i].results)
                for (let j = 0; j < array.length; j++) {
                    vehiclesArray.push(array[j]);
                }
            }
            data = vehiclesArray; 
            setVehicles(data);
        } catch (error) {
            console.log(`Error`, error);
            setErr(`Something went wrong: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <input className='search-input' placeholder='Search for vehicle...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div className='loading-error'>
                {err && <h2>{err}</h2>}
                {isLoading && <div className='jokes'><img src={loading} alt="loading icon" />
        <p>What’s Yoda’s advice for going to the bathroom?</p>
        <p>Doo-doo or doo-doo-not-do.</p></div>}
            </div>
            <div className="result">
            {vehicle.filter(vehicle => {
                if (query === "") {
                    return vehicle;
                } else if (vehicle.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(vehicle)
                    return vehicle;
                } else {
                    return false;
                };
            }).map((vehicle) => (
            <div key = {vehicle.name}>
            <p className='info-title people'>{vehicle.name}</p>
            <div  className='info'>
            <p><span className='category'>Vehicle Class:</span> {vehicle.vehicle_class}</p>
            <p><span className='category'>Cargo Capacity:</span> {vehicle.cargo_capacity}</p>
            <p><span className='category'>Crew:</span> {vehicle.crew} crewmember(s)</p>
            <p><span className='category'>Passengers:</span> {vehicle.passengers} passenger(s)</p>
            <p><span className='category'>Model: </span>{vehicle.model}</p>
            <p><span className='category'>Cost:</span>{vehicle.cost_in_credits} credits</p>
            <p><span className='category'>Manufacturer:</span> {vehicle.manufacturer}</p>
            </div>
           
            </div>
        ))}
      </div>,
        </div>
      );

    }