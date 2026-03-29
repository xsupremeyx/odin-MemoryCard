import Card from "./Card";

function GameBoard({pokemon, onCardClick}){
    return (
      <main className="gameboard">
        {pokemon.map((p) => (
          <Card key={p.id} pokemon={p} onCardClick={onCardClick} />
        ))}
      </main>
    );    
}

export default GameBoard;

