import { Route, Routes } from 'react-router-dom';
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';
import StartGame from './pages/StartGame';
import PlayGames from './pages/PlayGames';

function App() {

  return (
   <Routes>
    <Route path="/" element={<TextInputFormContainer/>}/>
    <Route path='/start' element={<StartGame/>}/>
    <Route path='/play' element={<PlayGames/>} />
   </Routes>
  )
}

export default App
