import { useSelector } from "react-redux";

function CurrentScore({ active }) {
  const currentScore = useSelector((state) => state.game.activeScore);
  return (
    <div className="player b flex flex-col items-center gap-6 rounded-xl border border-stone-400 border-opacity-25 px-6 py-5">
      <h2 className="text-stone-300">CURRENT</h2>
      <p className="text-2xl">{active ? currentScore : 0}</p>
    </div>
  );
}

export default CurrentScore;
