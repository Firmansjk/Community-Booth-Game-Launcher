export default function FeaturedGameView ({ onGoToList, onLaunch, isLocked }) {
    return (
        <div className="featured-view">
            <div className="featured-view__sidebar">
                {/* LOGO */}
                <div className="featured-view__nav-item featured-view__nav-item--logo"></div>

                {/* GAME GROUP */}
                <div className="featured-view__game-group">
                    <div className="featured-view__nav-item featured-view__nav-item--game"></div>
                    <div className="featured-view__nav-item featured-view__nav-item--game"></div>
                    <div className="featured-view__nav-item featured-view__nav-item--game"></div>
                </div>

                {/* ALL GAMES */}
                <div className="featured-view__nav-item featured-view__nav-item--all" onClick={onGoToList}>
                    <div className="featured-view__grid-dot"></div>
                    <div className="featured-view__grid-dot"></div>
                    <div className="featured-view__grid-dot"></div>
                    <div className="featured-view__grid-dot"></div>
                </div>
            </div>
            <div className="featured-view__stage">
                <button className="featured-view__play-btn" onClick={onLaunch} disabled={isLocked}> {isLocked ? 'Launching...' : 'Start Game'} </button>
            </div>
        </div>
    );
};