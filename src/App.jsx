import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <div>
      <Button text="submit" onClickHandler={() => console.log("Submit 1")}/>
      <Button text="submit 2" onClickHandler={() => console.log("Submit 2")}/>
      <Button text="submit 3" onClickHandler={() => console.log("Submit 3")}/>
        
    </div>
  )
}

export default App
