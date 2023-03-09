import './App.css';
import { useState } from 'react' // import useState hook
import MoleContainer from './components/MoleContainer'

function App() {
  let [score, setScore] = useState(0) // state variable to hold score

  const createMoleHill = () => { // function to create mole hill
    let hills = [] // array to hold mole hill
    for(let i = 0; i < 9; i++) { // loop to create mole hill
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />) // push mole hill to array
    }
    return (
      <div>
        { hills } {/* display mole hill */}
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()} {/* display mole hill */}
    </div>
  );
}

export default App;