import React, { useState, useEffect} from 'react';

export default function Vehicles() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

const [vehicle, setVehicles] = useState([]);
const [query, setQuery] = useState ("");

const urls = [
    "https://swapi.dev/api/vehicles/?page=1",
    "https://swapi.dev/api/vehicles/?page=2",
    "https://swapi.dev/api/vehicles/?page=3",
    "https://swapi.dev/api/vehicles/?page=4",
    
]

    const getData = async()=>{
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
            console.log(`Error`, error)
        }
    };
    return (
        <div>
            <input className='search-input' placeholder='Search for vehicle...' 
            onChange = {event => setQuery(event.target.value)}></input>
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
            <div key = {vehicle.name} className='info'>
            <p>{vehicle.name}</p>
            <div>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
            <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            <p>Crew: {vehicle.crew} crewmember/s</p>
            <p>Passengers: {vehicle.passengers} passenger/s</p>
            <p>Model: {vehicle.model}</p>
            <p>Cost: {vehicle.cost_in_credits} credits</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            </div>
           
            </div>
        ))}
      </div>,
        </div>
      );

    }