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
        const res = await fetch(props.urlHome);
        const data = await res.json();
        // (console.log(data))
        setHome(data.name)
        
    }
    const getSpeciesData = async() => {
      const res = await fetch(props.urlSpecies);
        const data = await res.json();
        setSpecies(data.name)
    }

  return (
    <div>
        <p>Homeworld: {home}</p>
        <p>Species: {(species === "") ? "Human" : species}</p>
        </div>
  )
}

