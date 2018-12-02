import React from 'react'

const Membre = (props) => {
    const nom = props.nom
    const age = props.age
    return (
        <h2>Membre : {nom} à {age} ans</h2>
    )
}

export default Membre