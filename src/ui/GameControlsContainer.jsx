import Button from "./Button";
import Dice from "../game_features/Dice";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentScoreToTotalScore,
  reset,
  rollDice,
} from "../game_features/gameSlice";

function GameControlsContainer() {
  const dispatch = useDispatch();
  const buttonDisabled =
    useSelector((state) => state.game.gameStatus) === "complete";

  return (
    <div className="flex flex-col items-center justify-around space-y-4">
      <Button onClick={() => dispatch(reset())}>
        <span className="material-symbols-outlined">sync</span>NEW GAME
      </Button>
      <Dice />
      <div className="flex flex-col items-center space-y-4">
        <Button
          color="btn-success"
          onClick={() => dispatch(rollDice())}
          disabled={buttonDisabled}
        >
          <span className="text-2xl">🎲 </span>Roll DICE
        </Button>
        <Button
          color="btn-warning"
          onClick={() => dispatch(addCurrentScoreToTotalScore())}
          disabled={buttonDisabled}
        >
          <span className="text-2xl">✋🏾 </span>HOLD
        </Button>
      </div>
    </div>
  );
}

export default GameControlsContainer;
