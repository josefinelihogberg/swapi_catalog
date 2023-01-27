import React, { useState} from 'react';
import leia from "../../UI/assets/people_leia.png"

export default function People( ) {
const [people, setPeople] = useState([]);
const [isVisible, setIsVisible] = useState(true);
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
// console.log(urls);

    const getData = async()=>{
        try {
            const res = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            let data = res;
            let peopleArray = [];
            // console.log(peopleArray)
            for (let i = 0; i < data.length; i++) {
                let array = data[i].results; 
                for (let j = 0; j < array.length; j++) {
                    // console.log(array[j])
                    peopleArray.push(array[j]);
                }
            }
            // console.log(setPeople);
            setPeople(peopleArray);
        } catch (error) {
            console.log(`Error`, error)
        }
    }

    function HandleClick() {
        getData()
        setIsVisible(true)
    }


        // const res = await fetch("https://swapi.dev/api/people/");
        // console.log(res);
        // const data = await res.json();
        // console.log(data)
        // setPeople(data.results);
        // };

    return (
        <div>
            <div className='img-div'>
            <img className="icon-img" src={leia} alt='Princess Leia from Starwars' />
            <button onClick={HandleClick}>People</button>
            </div>
            <div className="result" onClick={() => setIsVisible(false)} style = {{ display: isVisible ? "block" : "none"}}>
            {people.filter(person => {
                if (query === "") {
                    return person;
                } else if (person.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(person)
                    return people;
                } else {
                    return false;
                }
                
            }).map((person) => (
            <div key = {person.name} className='info'>
            <input placeholder='Person..' onChange = {event => setQuery(event.target.value) }/>
            <p>{person.name}</p>
            <div>
            <p>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Height: {person.height}</p>
            </div>
           
            </div>
        ))}
      </div>,
        </div>
      );

    }