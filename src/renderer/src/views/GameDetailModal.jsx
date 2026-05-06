export default function GameDetailModal ({ game, onClose, onLaunch, isLocked }) {
  // Prevent clicks inside the modal from closing it
  const handleContentClick = (e) => e.stopPropagation();

  // Array to render 3 empty screenshot boxes
  const dummyScreenshots = [1, 2, 3];

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={handleContentClick}>
        
        {/* --- 2-Column Layout --- */}
        <div className="modal__body">
          
          {/* LEFT COLUMN */}
          <div className="modal__left">
            <div className="modal__poster"></div>
            <div className="modal__info">
              <p><strong>Genre :</strong> {game?.genre || "Unknown"}</p>
              <p><strong>Developer :</strong> {game?.dev || "Author Name"}</p>
              <p><strong>Social Media :</strong> {game?.social || "N/A"}</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="modal__right">
            
            {/* Overview Section */}
            <header className="modal__header">
              <h2 className="modal__title">{game?.title || "Game Title"}</h2>
              <span className="modal__label">Overview</span>
            </header>
            
            <div className="modal__text-box">
              <p>{game?.desc || "Lorem ipsum dolor sit amet akjmdn akdfkjadkfnjejk adklflakdjsflajk..."}</p>
            </div>

            {/* Screenshots Section */}
            <header className="modal__header modal__header--right">
              <span className="modal__label">Screenshots</span>
            </header>
            
            <div className="modal__screenshot-list">
              {dummyScreenshots.map(num => (
                <div key={num} className="modal__screenshot-item"></div>
              ))}
            </div>

          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="modal__footer">
          {/* Down Arrow SVG from your Figma */}
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
};