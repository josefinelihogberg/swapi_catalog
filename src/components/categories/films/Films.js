import React, { useState} from 'react';
import "./Films.css";
import camera from '../../UI/assets/movie-roll.png';


export default function Films( ) {
const [films, setFilms] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [err, setErr] = useState("");

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

const hideFilm = ()=> {


}
    return (
        <div>
            <div className='img-div'>
        {err && <h2>{err}</h2>}
        <img className="icon-img camera" src={camera} alt='camera-roll' />
        <button onClick={getData}>Films</button>
        </div>
        {isLoading && <h2>Loading...</h2>}
        <div className='result' onClick={hideFilm}>
            {films.map((film) => (
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
