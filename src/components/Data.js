import React, { useState, useEffect} from 'react';

export default function Data(props) {
    useEffect(() => {
        getHomeData();
        getSpeciesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [home, setHome] = useState(""); 
    const [species, setSpecies] = useState("");

    const getHomeData = async() => {
        console.log(props.urlHome)
        const res = await fetch(props.urlHome);
        const data = await res.json();
        (console.log(data))
        setHome(data.name)
        
    }
    const getSpeciesData = async() => {
      console.log(props.urlSpecies)
      const res = await fetch(props.urlSpecies);
        const data = await res.json();
        setSpecies(data.name)
    }

  return (
    <div className='data-div'>
        <p><span className='category'>Homeworld:</span> {home}</p>
        <p><span className='category'>Species:</span> {(species === "") ? "Human" : species}</p>
    </div>
  )
}

