import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../components/Hangman/Hangman";
export default function PlayGames() {
  const { state } = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleGuessedLetters(letter) {
    if (state.word.toUpperCase().includes(letter)) {
      console.log("Guessed the letter correctly");
    } else {
      console.log("Guessed the letter correctly");
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1> Play Game </h1>

      {state.word && (
        <>
          <MaskedText text={state.word} guessedText={guessedLetters} />
          <div>
            <LetterButtons
              text={state.word}
              guessedLetters={guessedLetters}
              onLetterClick={handleGuessedLetters}
            />
          </div>
          <div>
            <Hangman step={step} />
          </div>
          <Link to="/">Home</Link>
          <Link className="text-blue-400" to="/start">
            Link to Start Game
          </Link>{" "}
        </>
      )}
    </>
  );
}
