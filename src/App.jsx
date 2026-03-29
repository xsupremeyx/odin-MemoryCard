import "./styles/App.css";
import {useState, useEffect} from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(
    ()=> {
      const fetchPokemon = async () => {
        // generates 12 unique ids b/w 1 and 151
        const ids = []
        while(ids.length < 12){
          const randomId = Math.floor(Math.random()*151) +1;
          if(!ids.includes(randomId)) ids.push(randomId);
        }

        // fetch all 12 at same time.
        const results = await Promise.all(
          ids.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()))
        );

        // extract the required data.

        const formatted = results.map((p) => ({
          id: p.id,
          name: p.name,
          image: p.sprites.other["official-artwork"].front_default,
        }));

        setPokemon(formatted);
      };

      fetchPokemon();
    },[]); //run on mount only!

  return <div>Memory Card Game</div>;
}

export default App;