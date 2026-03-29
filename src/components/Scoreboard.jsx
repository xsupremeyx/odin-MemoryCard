function Scoreboard({currentScore, bestScore}){
    return (
      <header className="scoreboard">
        <h1 className="scoreboard__title">Memory Game</h1>
        <div className="scoreboard__scores">
          <div className="score-box">
            <span className="score-box__label">Score</span>
            <span className="score-box__value">{currentScore}</span>
          </div>
          <div className="score-box">
            <span className="score-box__label">Best</span>
            <span className="score-box__value">{bestScore}</span>
          </div>
        </div>
      </header>
    );
}

export default Scoreboard;