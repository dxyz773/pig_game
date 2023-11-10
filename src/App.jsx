import Player from "./game_features/Player";
import GameControls from "./ui/GameControls";

function App() {
  return (
    <div className="mt-14 flex">
      <Player />
      <GameControls />
      <Player />
    </div>
  );
}

export default App;
