const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

export default function LetterButtons() {
  return (
    <>
      {
        ALPHABETS.map((letter) => {
            return (
                <button 
                    className="h-12 w-12 m-1 text-white rounded-md bg-blue-500"
                    key={`button-${letter}`}
                >
                    {letter}
                </button>
            );
        })
      }
    </>
  );
}
