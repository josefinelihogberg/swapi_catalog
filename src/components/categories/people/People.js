import React, { useState, useEffect} from 'react';
import Data from '../../Data'


export default function People() {
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

const [people, setPeople] = useState([]);
const [query, setQuery] = useState ("");
const [isLoading, setIsLoading] = useState(false);
const [err, setErr] = useState("");

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
        setIsLoading(true)
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
            console.log(`Error`, error);
            setErr(`Something went wrong: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <input className='search-input' placeholder='Search for character...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div className='loading-error'>
                {err && <h2>{err}</h2>}
                {isLoading && <h2>Loading...</h2>}
            </div>
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
            <div key = {person.name}>
            <p className='info-title people'>{person.name}</p>
            <div className='info'>
            <p><span className='category'>Gender:</span> {person.gender}</p>
            <p><span className='category'>Birth Year:</span> {person.birth_year}</p>
            <p><span className='category'>Height:</span> {person.height} cm</p>
            <p><span className='category'>Weight:</span> {person.mass} kg</p>
            <p><span className='category'>Skin color:</span> {person.skin_color}</p>
            <p><span className='category'>Hair color:</span> {person.hair_color}</p>
            <p><span className='category'>Eye color:</span> {person.eye_color}</p>
            <p className='data-info'>{<Data urlHome= {person.homeworld} urlSpecies={person.species} />}</p>
            </div>
            </div>
        ))}
        </div>,
        </div>
      );

    }