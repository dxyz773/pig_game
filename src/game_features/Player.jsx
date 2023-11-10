import { useSelector } from "react-redux";
import CurrentScore from "./CurrentScore";
import PlayerScore from "./PlayerScore";

function Player({ num }) {
  const activePlayer = useSelector((state) => state.game.activePlayer) === num;
  console.log(activePlayer);
  console.log(num);
  return (
    <div className={`mockup-phone ${activePlayer ? "border-accent" : ""} `}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className="flex flex-col gap-24">
            <PlayerScore num={num} />
            <CurrentScore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
