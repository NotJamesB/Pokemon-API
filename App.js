import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => { 
      setPokemon(response.data.results)
    })
    .then(response => {
      setPokemon(response.results)
    })
    .catch( (err) => {
      console.log(err);
    })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <ul>
    {
    pokemon.map((pokemonObj, i) => {
      return (<li key={i}>{pokemonObj.name}</li>)
    })
    }
      </ul>
      </header>
    </div>
  );
}

export default App;
