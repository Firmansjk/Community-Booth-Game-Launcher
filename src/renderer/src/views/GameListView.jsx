export default function  GameListView ({ onGoBack, onOpenPopup }) {
    return (
        <div className="game-list">
            {/* Header Block */}
            <header className="game-list__header">
                <button className="game-list__back-btn" onClick={onGoBack}>
                ←
                </button>
                
                <h1 className="game-list__title">Games from East Indo Dev</h1>
                
                <div className="game-list__logo"></div>
            </header>

            {/* Grid Block */}
            {/* <div className="game-list__grid">
                {allGames.map((game) => (
                <div 
                    key={game.id} 
                    className="game-list__card" 
                    onClick={() => onOpenPopup(game)}
                > */}
                    {/* If the game has a title, show it. Otherwise, say Clickable */}
                    {/* <span className="game-list__card-text">
                    {game.title || "clickable"}
                    </span>
                </div>
                ))}
            </div> */}
            <div className="game-list__grid">
                <div className="game-list__card" onClick={onOpenPopup}>
                    <span className="game-list__card-text">
                    {"clickable"}
                    </span>
                </div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
                <div className="game-list__card"></div>
            </div>
        </div>
    );
};

