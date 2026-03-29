import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import Modal from "./components/Modal";
import {useState, useEffect} from "react";

const POKE_COUNT = 12;
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null);
  

  useEffect(
    ()=> {
      const fetchPokemon = async () => {
        // generates 12 unique ids b/w 1 and 151
        setIsLoading(true); 
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
        setIsLoading(false);
      };
      fetchPokemon();
    },[fetchTrigger]); //run on mount and specific trigger only!

    // shuffler
    const shuffle = (arr) => [...arr].sort( () => Math.random() - 0.5);

    const handleCardClick = (id) => {
      if(clickedIds.includes(id)) {
        setModal('lose');
        setClickedIds([]);
        setCurrentScore(0);
      }
      else{
        const newScore = currentScore + 1;

        if(newScore === POKE_COUNT) {
          setModal('win');
          setClickedIds([]);
          setCurrentScore(0);
          setBestScore(newScore);
        }
        else{
          setClickedIds([...clickedIds, id]);
          setCurrentScore(newScore);
          if (newScore > bestScore) setBestScore(newScore);
          setPokemon(shuffle(pokemon));
        }
      }
    }

  const handleModalClose = () => {
    setModal(null);
    setFetchTrigger(prev => prev + 1); // trigger a new fetch
  }

  return (
    <div className="app">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {isLoading ? (
        <div className="loading">
          <div className="pokeball"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <GameBoard pokemon={pokemon} onCardClick={handleCardClick} />
      )}
      {modal && <Modal type={modal} onClose={handleModalClose} bestScore={bestScore} />}
    </div>
  );
}

export default App;