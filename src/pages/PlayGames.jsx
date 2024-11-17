import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
export default function PlayGames() {
  const { state } = useLocation();
  return (
    <>
      <h1> Play Game </h1>
      <MaskedText text={state.word} guessedText={["S","T"]} />
      <div>
        <LetterButtons/>
      </div>
      <Link className="text-blue-400" to="/start">
        Link to Start Game
      </Link>
    </>
  );
}
