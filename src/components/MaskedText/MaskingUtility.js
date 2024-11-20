/**
 * 
 * @param { The word is given and expected to be guessed } originalWord 
 * @param { Letters that are already guessed by the user } guessedLetters 
 * Ex : originalWord : SMIT,
 * guessedLetters : ["s", "T"]
 * 
 * returns ->  ["S _ _ T"]
 * 
 */


export default function getMaskedString(originalWord, guessedLetters) {
    // returns all the guessed letters in uppercase
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());
    const result = originalWord.toUpperCase().split("").map(char => {
        if(guessedLetters.includes(char)) {
            return char;
        }
        else {
            return "_";
        }
    })
    
    return result;
}