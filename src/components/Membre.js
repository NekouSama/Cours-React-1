import React from 'react'

const Membre = (props) => {
    const nom = props.nom
    const age = props.age
    return (
        <h2 style={{
            backgroundColor: age > 20 ? 'purple' : 'orange',
            color: 'white'
        }}>
            Membre : {nom} a {age} ans
        </h2>
    )
}

export default Membre