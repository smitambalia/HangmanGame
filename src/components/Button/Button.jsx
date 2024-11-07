import getStyleType from "./getStyleType";
export default function Button({ text, onClickHandler , styleType = "primary" ,type="button" }) {
  return (
    <div>
      <button 
      className={`px-4 py-2 text-white ${getStyleType(styleType)}`}
      onClick={onClickHandler}
      type={type}
      > {text} </button>
    </div>
  );
}

