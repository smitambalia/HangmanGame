const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

export default function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetter = text.toUpperCase().split("");
  console.log("Guessed Letters->", guessedLetters);
  const buttonStyle = (letter) => {
    if (guessedLetters.includes(letter)) {
      return `${
        originalLetter.includes(letter) ? "bg-green-500" : "bg-red-500"
      }`;
    } else {
      return `bg-blue-500`;
    }
  };

  function handleLetterClick(event) {
    const letter = event.target.value;
    onLetterClick?.(letter);
  }
  return (
    <>
      {ALPHABETS.map((letter) => {
        return (
          <button
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(
              letter
            )}`}
            value={letter}
            key={`button-${letter}`}
            onClick={handleLetterClick}
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        );
      })}
    </>
  );
}
