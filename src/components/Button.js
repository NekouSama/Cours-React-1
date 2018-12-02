import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.vieillir}>
            Viellir de {props.age} ans
        </button>
    )
}

export default Button