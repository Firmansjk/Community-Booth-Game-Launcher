import {  useState  } from 'react'
//import FeaturedGameView from './views/FeaturedGameView'
import GameListView from './views/GameListView'
import GameDetailModal from './views/GameDetailModal'

function App() {
  //ini untuk state management.
  //const [viewState, setViewState] = useState('FEATURED');
  //ini untuk game yang dipilih
  const [selectedGame, setSelectedGame] = useState(null);
  //anti spam
  const [isLocked, setIsLocked] = useState(false); // Anti-spam lock

const handleLaunch = async (gamePath) => {
    if (isLocked) return;
    
    setIsLocked(true);
    try {
      // Calling the bridge we set up in preload
      await window.api.launchGame(gamePath);
      
      // Unlock after 10 seconds
      setTimeout(() => setIsLocked(false), 10000);
    } catch (err) {
      console.error(err);
      setIsLocked(false);
    }
  };
  //dummy data untuk testing
  const noraGame = { 
    title: "Nora The Game", 
    dev: "Mythparty", 
    genre: "Mystery, Puzzle",
    exePath: "C:/Firman/Game/Game Lainnya/Test Mager Launcher/Nora The Game.exe",
    desc: "A great game for the Makassar booth!" 
  }

  return (
    // <div>
    //   {viewState === 'FEATURED' && (
    //     <FeaturedGameView 
    //       onGoToList={() => setViewState('LIST')} 
    //       // Assuming FeaturedView has a "Play" button
    //       onLaunch={() => handleLaunch(noraGame.exePath)}
    //       isLocked={isLocked}
    //     />
    //   )}

    //   {viewState === 'LIST' && (
    //     <GameListView 
    //       onGoBack={() => setViewState('FEATURED')}
    //       onOpenPopup={() => setSelectedGame(noraGame)}
    //       isLocked={isLocked}
    //     />
    //   )}

    //   {selectedGame && (
    //     <GameDetailModal 
    //       game={selectedGame} 
    //       onClose={() => setSelectedGame(null)} 
    //       onLaunch={() => handleLaunch(selectedGame.exePath)}
    //       isLocked={isLocked}
    //     />
    //   )}
    // </div>
    <main className="app-root">
      {/* 1. Main View is always the List View now */}
      <GameListView 
        onOpenPopup={() => setSelectedGame(noraGame)}
        isLocked={isLocked}
        // If you kept the back button in GameListView, you can use it to close the whole app:
        // onCloseApp={() => window.close()} 
      />

      {/* 2. Modal floats on top when selectedGame is not null */}
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