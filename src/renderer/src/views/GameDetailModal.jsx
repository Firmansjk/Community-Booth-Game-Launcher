export default function GameDetailModal({ game, onClose, onLaunch, isLocked }) {
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        
        <div className="modal__body">
          
          {/* --- LEFT COLUMN --- */}
          <div className="modal__left">
            {game?.posterUrl ? (
              <img className="modal__poster" src={game.posterUrl} alt={`${game.title} Poster`} />
            ) : (
              <div className="modal__poster"></div>
            )}
            
            <div className="modal__info">
              <p><strong>Genre :</strong> {game?.genre || "Unknown"}</p>
              <p><strong>Developer :</strong> {game?.dev || "Unknown"}</p>
              <p><strong>Social Media :</strong> {game?.social || "N/A"}</p>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="modal__right">
            
            <header className="modal__header">
              <h2 className="modal__title">{game?.title || "Game Title"}</h2>
              <span className="modal__label">Overview</span>
            </header>
            
            <div className="modal__text-box">
              <p>{game?.desc || "No description provided."}</p>
            </div>

            <header className="modal__header modal__header--right">
              <span className="modal__label">Screenshots</span>
            </header>
            
            {/* --- THE UPDATED SCREENSHOT CAROUSEL --- */}
            <div className="modal__screenshot-list">
              {game?.screenshotUrls?.length > 0 ? (
                game.screenshotUrls.map((url, index) => (
                  <img key={index} className="modal__screenshot-item" src={url} alt={`Screenshot ${index + 1}`} />
                ))
              ) : (
                <div style={{ color: '#888', fontStyle: 'italic', padding: '10px 0' }}>
                  No screenshots available.
                </div>
              )}
            </div>

          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="modal__footer">
          <button className="modal__close-btn" onClick={onClose} title="Close">
            <svg viewBox="0 0 24 24" width="50" height="50">
              <circle cx="12" cy="12" r="11" fill="#a0a0a0" />
              <path d="M7 10l5 5 5-5z" fill="#4b4b4b" />
            </svg>
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
}