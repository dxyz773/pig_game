import Button from "./Button";
import Dice from "../game_features/Dice";

function GameControlsContainer() {
  return (
    <div className="flex flex-col items-center justify-around space-y-4">
      <Button>
        <span className="material-symbols-outlined">sync</span>NEW GAME
      </Button>
      <Dice />
      <div className="flex flex-col items-center space-y-4">
        <Button color="btn-success">
          <span className="text-2xl">🎲 </span>Roll DICE
        </Button>
        <Button color="btn-warning">
          <span className="text-2xl">✋🏾 </span>HOLD
        </Button>
      </div>
    </div>
  );
}

export default GameControlsContainer;
