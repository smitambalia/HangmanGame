export default function Button({ text, onClickHandler }) {
  return (
    <div>
      <button 
      className="text-white bg-blue-500"
      onClick={onClickHandler}
      > {text} </button>
    </div>
  );
}
