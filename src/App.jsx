import Player from "./game_features/Player";
import GameControlsContainer from "./ui/GameControlsContainer";

function App() {
  return (
    <div className="mt-14 flex">
      <Player num={1} />
      <GameControlsContainer />
      <Player num={2} />
    </div>
  );
}

export default App;
