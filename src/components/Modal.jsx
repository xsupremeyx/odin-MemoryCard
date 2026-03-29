function Modal({ type, onClose, bestScore }) {
  const isWin = type === "win";

  return (
    <div className="modal-overlay">
      <div className={`modal ${isWin ? "modal--win" : "modal--lose"}`}>
        <div className="modal__icon">{isWin ? "🏆" : "💥"}</div>
        <h2 className="modal__title">{isWin ? "You Win!" : "Game Over!"}</h2>
        <p className="modal__message">
          {isWin
            ? `Amazing! You clicked all ${bestScore} Pokémon without repeating!`
            : "You clicked the same Pokémon twice!"}
        </p>
        <button className="modal__btn" onClick={onClose}>
          {isWin ? "Play Again ✨" : "Try Again →"}
        </button>
      </div>
    </div>
  );
}

export default Modal;
