export default function FeaturedGameView ({ onGoToList, onLaunch, isLocked }) {
    return (
        <div>
            <div>
                <h2> Left Sidebar (smaller)</h2>
                <h3>Mager Logo</h3>
                <h3>Featured Game 1</h3>
                <h3>Featured Game 2</h3>
                <h3>Featured Game 3</h3>
                <button onClick={onGoToList}>AllGameList</button>
            </div>
            <div>
                <h2>Right Featured Game Background (larger)</h2>
                <button onClick={onLaunch} disabled={isLocked}> {isLocked ? 'Launching...' : 'Start Game'} </button>
            </div>
        </div>
    );
};