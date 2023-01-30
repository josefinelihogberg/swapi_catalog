import React, { useEffect, useState} from 'react';
import "./Films.css";


export default function Films( ) {
useEffect(() => {
    getData();

}, []);

const [films, setFilms] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [err, setErr] = useState("");
const [query, setQuery] = useState("");

// Async to get film data
    const getData = async()=>{
        setIsLoading(true);
        try {
        const res = await fetch("https://swapi.dev/api/films/");
        if(!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data)
        setFilms(data.results);
    } catch (err) {
        setErr(`Something went wrong: ${err.message}`);
    } finally {
        setIsLoading(false);
    }
};
return (
        <div>
            <input className='search-input' placeholder='Search for movie...' 
            onChange = {event => setQuery(event.target.value)}></input>
            <div>
        {err && <h2>{err}</h2>}
        </div>
        {isLoading && <h2>Loading...</h2>}
        <div className='result'>
            {films.filter( film => {
                if (query === "") {
                    return film; 
                } else if (film.title.toLowerCase().includes(query.toLowerCase())) {
                    return film; 
                } else {
                    return false; 
                }
            }).map((film) => (
                <div key = {film.title} className="info">
                    <div>{film.title} </div>
                <div>
                <p>Episode: {film.episode_id}</p>
                <p>Released: {film.release_date}</p>
                <p>Director: {film.director}</p>
                <p>Opening Crawl: {film.opening_crawl}</p>
                <br />
                </div>
                </div>
            ))}
        </div>
        </div>
      );
}

//fetch
//information rendering
