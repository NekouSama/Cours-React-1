import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.vieillir}>
            Viellir de {props.age} ans
        </button>
    )
}

export default Button