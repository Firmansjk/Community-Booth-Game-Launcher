export default function  GameListView ({ onGoBack, onOpenPopup }) {
    // Creating an array of 15 empty slots to match your 5x3 grid
    const dummyCount = Array.from({ length: 15 });
    
    return (
        <div className="game-list">
            {/* Header Block */}
            <header className="game-list__header">
                {/* <button className="game-list__back-btn" onClick={onGoBack}> ← </button> */}
                <div className="game-list__logo"></div>
                <h1 className="game-list__title">Community's Games</h1>
            </header>

            {/* The Line underneath the title */}
            {/* <div className="game-list__divider"></div> */}

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
            
            {/* ini yang lama */}
            {/* <div className="game-list__grid">
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
            </div> */}
            {/* --- Grid Section --- */}
            <div className="game-list__grid">
                {dummyCount.map((_, index) => (
                <div 
                    key={index} 
                    className="game-list__card"
                    onClick={onOpenPopup} // Opens the modal when clicked
                >
                    {/* Only show "clickable" on the first card, just like your image */}
                    <span className="game-list__card-text">
                    {index === 0 ? "clickable" : ""}
                    </span>
                </div>
                ))}
            </div>
        </div>
    );
};

