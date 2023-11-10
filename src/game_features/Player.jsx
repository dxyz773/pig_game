import CurrentScore from "./CurrentScore";
import PlayerScore from "./PlayerScore";

function Player() {
  return (
    <div className="mockup-phone ">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className="flex flex-col gap-24">
            <PlayerScore />
            <CurrentScore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
