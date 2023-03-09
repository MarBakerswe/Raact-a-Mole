import { useEffect } from 'react' // useEffect is a hook that runs after the component is rendered
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => { // useEffect is a hook that runs after the component is rendered
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false) // props.toggle is a function that takes a boolean as an argument
        }, randSeconds)
        return () => clearTimeout(timer) // clearTimeout is a function that stops a timer
    })

    return (
        <div> 
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole