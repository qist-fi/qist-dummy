import logo from "./logo.svg";
import "./App.css";

const pitchLink =
  "https://www.loom.com/share/91f8b8bf24e14b8aa3c1db19bc6821c3";

const deckLink = "https://docsend.com/v/2sj65/qist_deck";

const telegramLink = "https://t.me/sentidosol";
function App() {
  return (
    <div className="App">
      <img src="./qist logo.png" className="app-logo" />
      <h3 className="app-title">
        Qist is a protocol to trade and lend crypto on-chain in a
        Shariah-compliant way on Solana
      </h3>
      <div className="project-links">
        <a href={pitchLink}>Pitch</a>
        <a href={deckLink}>Deck</a>
        <a href={telegramLink}>Telegram</a>
      </div>
    </div>
  );
}

export default App;
