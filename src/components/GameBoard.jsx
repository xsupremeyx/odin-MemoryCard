import Card from "./Card";

function GameBoard({pokemon, onCardClick}){
    return(
        <div>
            {
                pokemon.map((p)=>(
                    <Card key={p.id} pokemon={p} onCardClick={onCardClick}/>
                ))
            }
        </div>
    );    
}

export default GameBoard;