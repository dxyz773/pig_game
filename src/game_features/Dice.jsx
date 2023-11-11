import { useSelector } from "react-redux";

function Dice() {
  const dice = useSelector((state) => state.game.dice);
  const status = useSelector((state) => state.game.gameStatus);
  return (
    <div>
      {status === "playing" && (
        <img className="w-24 rounded-md" src={`./dice-${dice}.png`} />
      )}
    </div>
  );
}

export default Dice;
