import { useState, useEffect } from 'react'
import GameListView from './views/GameListView'
import GameDetailModal from './views/GameDetailModal'

function App() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      const fetchedGames = await window.api.getGamesList();
      setGames(fetchedGames);
    };
    loadGames();
  }, []);

  const handleLaunch = async (gamePath) => {
    if (isLocked) return;
    
    setIsLocked(true);
    try {
      await window.api.launchGame(gamePath);
      setTimeout(() => setIsLocked(false), 10000); // 10 second anti-spam lock
    } catch (err) {
      console.error(err);
      setIsLocked(false);
    }
  };

  return (
    <main className="app-root">
      <GameListView 
        games={games} 
        onOpenPopup={(game) => setSelectedGame(game)}
        isLocked={isLocked}
      />

      {selectedGame && (
        <GameDetailModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
          onLaunch={() => handleLaunch(selectedGame.exePath)}
          isLocked={isLocked}
        />
      )}
    </main>
  )
}

export default App