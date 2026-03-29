function Card({pokemon, onCardClick}){
    return (
      <div className="card" onClick={() => onCardClick(pokemon.id)}>
        <div className="card__img-wrapper">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <p className="card__name">{pokemon.name}</p>
      </div>
    );
}

export default Card;