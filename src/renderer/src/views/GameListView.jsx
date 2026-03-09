export default function  GameListView ({ onGoBack, onOpenPopup }) {
    return (
        <div>
            <div>
                <button onClick={onGoBack}>back button</button>
                <h1>Game List Headbar</h1>
                <h3>Mager Logo</h3>
            </div>
            <div>
                <button onClick={onOpenPopup}>Open Popup Test</button>
                <ul>
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                    <li>Game 4</li>
                    <li>Game 5</li>
                </ul>
                <ul>
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                    <li>Game 4</li>
                    <li>Game 5</li>
                </ul>
                                <ul>
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                    <li>Game 4</li>
                    <li>Game 5</li>
                </ul>
            </div>
        </div>
    );
};

