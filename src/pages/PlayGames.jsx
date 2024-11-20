import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
export default function PlayGames() {
  const { state } = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleGuessedLetters(letter) {
    setGuessedLetters([...guessedLetters,letter]);
  }


  return (
    <>
      <h1> Play Game </h1>
      <MaskedText text={state.word} guessedText={[]} />
      <div>
        <LetterButtons text={state.word} guessedLetters={guessedLetters} onLetterClick={handleGuessedLetters}/>
      </div>
      <Link className="text-blue-400" to="/start">
        Link to Start Game
      </Link>
    </>
  );
}
