import React, {useState, useEffect} from 'react';
import Data from '../../Data'


export default function Species() {
  useEffect(() => {
    getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
    const [species, setSpecies] = useState([]);
    const [query, setQuery] = useState ("");

    
    const urls = [
      "https://swapi.dev/api/species/?page=1",
      "https://swapi.dev/api/species/?page=2",
      "https://swapi.dev/api/species/?page=3",
      "https://swapi.dev/api/species/?page=4",
    ];

    const getData = async()=>{
      try {
          const res = await Promise.all(
              urls.map(url => fetch(url).then(res => res.json()))
          );
          let data = res;
          console.log(data);
          let speciesArray = [];
          for (let i = 0; i < data.length; i++) {
              let array = data[i].results; 
              for (let j = 0; j < array.length; j++) {
                  speciesArray.push(array[j]);
              }
          }
          data = speciesArray; 
          setSpecies(data);
      } catch (error) {
          console.log(`Error`, error)
      }
  };

  return (
    <div>
      <input className='search-input' placeholder='Search for species...' 
            onChange = {event => setQuery(event.target.value)}></input>
      <div>
      </div>
      <div className='result'>
        {species.filter(species => {
                if (query === "") {
                    return species;
                } else if (species.name.toLowerCase().includes(query.toLowerCase())){
                    console.log(species)
                    return species;
                } else {
                    return false;
                };
            }).map((species) => (
            <div key = {species.name} className='info'>
            <div>{species.name}</div>
            
            <div>
            <p >Classification: {species.classification}</p>
            <p >Height: {species.average_height}</p>
            <p >Lifespan: {species.average_lifespan}</p>
            <div>
                {<Data urlHome= {species.homeworld} />}
            </div>
            </div>
           
            </div>
        ))}
      </div>,
    </div>
  )
};
