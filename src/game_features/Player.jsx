import { useSelector } from "react-redux";
import CurrentScore from "./CurrentScore";
import PlayerScore from "./PlayerScore";

function Player({ num }) {
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const active = activePlayer === num;

  return (
    <div className={`mockup-phone ${active ? "border-secondary" : ""} `}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className="flex flex-col gap-24">
            <PlayerScore num={num} />
            <CurrentScore active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
