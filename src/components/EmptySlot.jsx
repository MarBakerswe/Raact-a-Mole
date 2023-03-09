import { useEffect } from "react"
import MoleHill from '../molehill.png'

const EmptySlot = (props) => { // props.toggle is a function that takes a boolean as an argument

    useEffect(() => { // useEffect is a hook that runs after the component is rendered
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => { // setTimeout is a function that runs a function after a certain number of milliseconds
            props.toggle(true) // props.toggle is a function that takes a boolean as an argument
        }, randSeconds) // randSeconds is a random number of milliseconds between 0 and 5000
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot