import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
export default function PlayGames() {
  const { state } = useLocation();
  return (
    <>
      <h1> Play Game </h1>
      <h2> {state.word} </h2>
      <MaskedText text={state.word} guessedText={["S","T"]} />
      <Link className="text-blue-400" to="/start">
        Link to Start Game
      </Link>
    </>
  );
}
