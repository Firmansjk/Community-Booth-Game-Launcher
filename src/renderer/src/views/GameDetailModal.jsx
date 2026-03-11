export default function GameDetailModal ({ game, onClose, onLaunch, isLocked }) {
// Prevent clicks from reaching the 'all game' view underneath
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        
        <div className="modal__top-row">
          <div className="modal__poster"></div>
          
          <div className="modal__info">
            <header className="modal__header">
              <h2 className="modal__title">{game?.title || "Game Title"}</h2>
              <span className="modal__label">Overview</span>
            </header>
            
            <div className="modal__description-grid">
              <div className="modal__text-box">
                {game?.desc || "Lorem ipsum dolor sit amet..."}
              </div>
              <div className="modal__video-placeholder">
                Video Kalo Ada
              </div>
            </div>

            <div className="modal__author-info" style={{marginTop: '15px'}}>
              <p>Genre: {game?.genre || "Unknown"}</p>
              <p>● {game?.dev || "Author Name"}</p>
              <p>● Social Media, etc.</p>
            </div>
          </div>
        </div>

        <div className="modal__screenshots-container">
          <div className="modal__screenshots-header">
             <span></span> {/* Spacer */}
             <span className="modal__label">Screenshots</span>
          </div>
          <div className="modal__screenshot-list">
            <div className="modal__screenshot-item"></div>
            <div className="modal__screenshot-item"></div>
            <div className="modal__screenshot-item"></div>
            <div className="modal__screenshot-item"></div>
          </div>
        </div>

        <footer className="modal__footer">
          <button className="modal__close-btn" onClick={onClose}>
             <span style={{transform: 'rotate(90deg)', display: 'inline-block'}}>▼</span>
          </button>
          
          <button 
            className="modal__play-btn" 
            onClick={onLaunch}
            disabled={isLocked}
          >
            {isLocked ? "Loading..." : "Play"}
          </button>
        </footer>

      </div>
    </div>
  );
};
