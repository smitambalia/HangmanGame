import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame";
import PlayGames from "./pages/PlayGames";
import Home from "./pages/Home";
import { WordContext } from "./context/WordContext";
import { useState } from "react";
function App() {
  const [ wordList, setWordList ] = useState([]);
  const [word, setWord] = useState("");

  return (
    <WordContext.Provider value={{ wordList, setWordList, word,setWord }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGames />} />
      </Routes>
    </WordContext.Provider>
  );
}

export default App;
