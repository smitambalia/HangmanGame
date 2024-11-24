import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame';
import PlayGames from './pages/PlayGames';
import Home from './pages/Home';

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/start' element={<StartGame/>}/>
    <Route path='/play' element={<PlayGames/>} />
   </Routes>
  )
}

export default App
