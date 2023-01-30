import React, { useState, useEffect} from 'react';
import Data from '../../Data'


export default function People() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

const [people, setPeople] = useState([]);
const [query, setQuery] = useState ("");

const urls = [
    "https://swapi.dev/api/people/?page=1",
    "https://swapi.dev/api/people/?page=2",
    "https://swapi.dev/api/people/?page=3",
    "https://swapi.dev/api/people/?page=4",
    "https://swapi.dev/api/people/?page=5",
    "https://swapi.dev/api/people/?page=6",
    "https://swapi.dev/api/people/?page=7",
    "https://swapi.dev/api/people/?page=8",
    "https://swapi.dev/api/people/?page=9"
]

    const getData = async()=>{
        try {
            const res = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            let data = res;
            let peopleArray = [];
            for (let i = 0; i < data.length; i++) {
                let array = data[i].results; 
                console.log(data[i].results);
                for (let j = 0; j < array.length; j++) {
                    peopleArray.push(array[j]);
                }
            }
            data = peopleArray; 
            setPeople(data);
        } catch (error) {
            console.log(`Error`, error)
        }
    };
    return (
        <div>
            <input className='search-input' placeholder='Search for character...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div className="result">
            {people.filter(person => {
                if (query === "") {
                    return person;
                } else if (person.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(person)
                    return people;
                } else {
                    return false;
                };
            }).map((person) => (
            <div key = {person.name} className='info'>
            <p>{person.name}</p>
            <div>
            <p>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Height: {person.height} cm</p>
            <p>Weight: {person.mass} kg</p>
            <p>Skin color: {person.skin_color}</p>
            <p>Hair color: {person.hair_color}</p>
            <p>Eye color: {person.eye_color}</p>
            {<Data urlHome= {person.homeworld} urlSpecies={person.species} />}
            </div>
            </div>
        ))}
        </div>,
        </div>
      );

    }