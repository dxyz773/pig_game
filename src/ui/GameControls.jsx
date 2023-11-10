import Button from "./Button";
import Dice from "../game_features/Dice";

function GameControls() {
  return (
    <div className="flex flex-col items-center justify-around space-y-4">
      <Button>🔄 NEW GAME</Button>
      <Dice />
      <div className="flex flex-col items-center space-y-4">
        <Button color="btn-success">🎲 ROLL DICE</Button>
        <Button color="btn-warning">✋ HOLD</Button>
      </div>
    </div>
  );
}

export default GameControls;
