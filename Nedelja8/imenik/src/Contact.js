import React from 'react'

const Contact = ({contact}) => {
    
    let {name, number} = contact;

    return(
            <p>Name: {name} - Number: {number}</p>
    )
}

export default Contact