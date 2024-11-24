import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const [word, setWord] = useState("");
  async function fetchWords() {
    console.log("get the words");
    const response = await fetch("http://localhost:3000/word");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);

    console.log(data[randomIndex]["wordValue"]);
    setWord(data[randomIndex]["wordValue"]);
  }

  useEffect(() => {
    fetchWords();
  }, []);
  return (
    <>
      <Link to="/play" state={{ word: word }}>
        <Button text="Single Player" />
      </Link>

      <Link to="/start">
        <div className="mt-4">
          <Button text="Multi player" type="secondry" />
        </div>
      </Link>
    </>
  );
}
