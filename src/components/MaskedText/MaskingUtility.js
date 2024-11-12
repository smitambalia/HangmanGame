/**
 * 
 * @param { The word is given and expected to be guessed } originalWord 
 * @param { Letters that are already guessed by the user } guessedLetters 
 * Ex : originalWord : SMIT,
 * guessedLetters : ["S", "T"]
 * 
 * return ->  ["S _ _ T"]
 */
export default function MaskingUtility(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const result = originalWord.toUpperCase().split("").map(char => {
        if(guessedLetters.has(char)) {
            return char;
        }
        else {
            return "_";
        }
    })

    return result.join("");
}