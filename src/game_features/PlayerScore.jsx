import { useSelector } from "react-redux";

function PlayerScore({ num }) {
  const totalScore = useSelector(
    (state) => state.game[`player${num}TotalScore`],
  );
  const gameStatus =
    useSelector((state) => state.game.gameStatus) === "complete";

  const winner = totalScore >= 100 && gameStatus;
  return (
    <div className="player flex flex-col items-center gap-6 px-6 py-4">
      <h2
        className={`text-2xl ${winner ? "text-green-600" : "text-stone-700"}`}
      >
        {winner ? "WINNER" : `PLAYER ${num}`}
      </h2>
      <p className="text-5xl text-stone-500">{totalScore}</p>
    </div>
  );
}

export default PlayerScore;
