import { useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { WordContext } from "../context/WordContext.js";

export default function Home() {
  const [word, setWord] = useState("");
  const { setWordList } = useContext(WordContext);

  async function fetchWords() {
    console.log("get the words");
    const response = await fetch("http://localhost:3000/word");
    const data = await response.json();

    setWordList([...data]);

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
        <Button text="Single Player" styleType="primary" />
      </Link>

      <Link to="/start">
        <div className="mt-4">
          <Button text="Multi player" styleType="secondary" />
        </div>
      </Link>
    </>
  );
}
