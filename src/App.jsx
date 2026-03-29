import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import {useState, useEffect} from "react";

const POKE_COUNT = 12;
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  

  useEffect(
    ()=> {
      const fetchPokemon = async () => {
        // generates 12 unique ids b/w 1 and 151
        const ids = [];
        while (ids.length < POKE_COUNT) {
          const randomId = Math.floor(Math.random() * 151) + 1;
          if (!ids.includes(randomId)) ids.push(randomId);
        }

        // fetch all 12 at same time.
        const results = await Promise.all(
          ids.map((id) =>
            fetch(`${POKE_API_URL}${id}`).then((res) =>
              res.json(),
            ),
          ),
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
    },[fetchTrigger]); //run on mount and specific trigger only!

    // shuffler
    const shuffle = (arr) => [...arr].sort( () => Math.random() - 0.5);

    const handleCardClick = (id) => {
      if(clickedIds.includes(id)) {
        alert("Game over! You Clicked the same card twice!");
        setClickedIds([]);
        setCurrentScore(0);
        setFetchTrigger(prev => prev + 1); // trigger a new fetch
      }
      else{
        const newScore = currentScore + 1;

        if(newScore === POKE_COUNT) {
          alert("Congratulations! You won the game!");
          setClickedIds([]);
          setCurrentScore(0);
          setBestScore(newScore);
          setFetchTrigger(prev => prev + 1); // trigger a new fetch
        }
        else{
          setClickedIds([...clickedIds, id]);
          setCurrentScore(newScore);
          if (newScore > bestScore) setBestScore(newScore);
          setPokemon(shuffle(pokemon));
        }
      }
    }

  return <div>
    <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
    <GameBoard pokemon={pokemon} onCardClick={handleCardClick}/>
  </div>;
}

export default App;