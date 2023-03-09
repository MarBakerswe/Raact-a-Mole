import { useState } from 'react' // import useState hook
import Mole from './Mole' // import Mole component
import EmptySlot from './EmptySlot' // import EmptySlot component

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false) // state variable to toggle mole

    const handleClick = (e) => { // handle click event on mole
        props.setScore(props.score + 1) // increment score
        setTheMole(false) // toggle mole
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} /> // ternary operator

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}> 
            {displayMole} {/* display mole or empty slot */}
        </div>
    )
}

export default MoleContainer