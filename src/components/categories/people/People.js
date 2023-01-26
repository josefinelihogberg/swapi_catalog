import React, { useState} from 'react';
import "./People.css";
import leia from "../../UI/assets/people_leia.png"

export default function People( ) {
const [people, setPeople] = useState([]);

    const getData = async()=>{
        const res = await fetch("https://swapi.dev/api/people/");
        console.log(res);
        const data = await res.json();
        console.log(data)
        setPeople(data.results);
        };

    return (
        <div>
        <div className='img-div'>
        <img className="icon-img" src={leia} alt='Princess Leia from Starwars' />
        <button onClick={getData}>People</button>
        </div>
        <div className='result'>
            {people.map((person) => (
                <div key = {person.name} className="people">Name: {person.name} 
                <p className='info'> Height:{person.height}, Birth: {person.birth_year}, Gender: {person.gender}</p></div>

            ))}
        </div>
        </div>
      );

    }