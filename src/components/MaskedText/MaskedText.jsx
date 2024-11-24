import getMaskedString from "./MaskingUtility";

export default function  MaskedText({text,guessedText}) {
    const maskedText = getMaskedString(text,guessedText);

    return (
        <>
            {
                maskedText?.map((letter, index) => {
                    return (
                        <span key={index} className="m-2">
                            {letter}
                        </span>
                    )
                })
            }
        </>
    )

}