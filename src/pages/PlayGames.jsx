import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../components/Hangman/Hangman";
import { WordContext } from "../context/WordContext";
export default function PlayGames() {
  const {word} = useContext(WordContext);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  const { wordList } = useContext(WordContext);
  console.log("WordList->", wordList);


  function handleGuessedLetters(letter) {
    if (word.toUpperCase().includes(letter)) {
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
   
      {word && (
        <>
          <MaskedText text={word} guessedText={guessedLetters} />
          <div>
            <LetterButtons
              text={word}
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
