import {  useState  } from 'react'
import FeaturedGameView from './views/FeaturedGameView'
import GameListView from './views/GameListView'
import GameDetailModal from './views/GameDetailModal'

function App() {
  //ini untuk state management.
  const [viewState, setViewState] = useState('FEATURED');
  //ini untuk game yang dipilih
  const [selectedGame, setSelectedGame] = useState(null);

  // Dummy data for testing
  const dummyGame = { 
    title: "Bukankah ini my simulator", 
    dev: "Passapu Studio", 
    genre: "Simulation",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  }

  return (
    <div>
      {viewState === 'FEATURED' && (
        <FeaturedGameView 
          onGoToList={() => setViewState('LIST')} 
        />
      )}

      {viewState === 'LIST' && (
        <GameListView 
          onGoBack={() => setViewState('FEATURED')}
          onOpenPopup={() => setSelectedGame(dummyGame)}
        />
      )}

      {selectedGame && (
        <GameDetailModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  )
}

export default App