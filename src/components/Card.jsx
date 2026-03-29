function Card({pokemon, onCardClick}){
    return(
        <div onClick={()=> onCardClick(pokemon.id)}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        </div>
    );
}

export default Card;