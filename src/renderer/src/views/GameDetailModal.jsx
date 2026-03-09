export default function GameDetailModal ({ game, onClose }) {
    return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', color: 'black', padding: '40px', borderRadius: '8px' }}>
        <h2>3. GAME INFO POPUP</h2>
        <p><strong>Title:</strong> {game.title}</p>
        <p>{game.desc}</p>
        
        <button onClick={() => alert("Game Launching...")} style={{ background: 'green', color: 'white' }}>
          START GAME
        </button>
        <button onClick={onClose} style={{ marginLeft: '10px' }}>
          CLOSE [X]
        </button>
      </div>
    </div>
    );
};
