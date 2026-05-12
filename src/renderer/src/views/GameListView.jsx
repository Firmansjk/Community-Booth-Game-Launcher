export default function GameListView({ games, onOpenPopup, isLocked }) {
  return (
    <div className="game-list">
      
      <header className="game-list__header">
        <div className="game-list__logo"></div>
        <h1 className="game-list__title">Community's Games</h1>
      </header>

      <div className="game-list__grid">
        {games.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No games found. Add some to your games.json file!
          </p>
        ) : (
          games.map((game, index) => (
            <div 
              key={game.id || index} 
              className="game-list__card"
              onClick={() => !isLocked && onOpenPopup(game)}
            >
              {game.posterUrl ? (
                <img 
                  src={game.posterUrl} 
                  alt={game.title} 
                  className="game-list__card-image" 
                />
              ) : (
                <span className="game-list__card-text">{game.title}</span>
              )}
            </div>
          ))
        )}
      </div>

    </div>
  );
}