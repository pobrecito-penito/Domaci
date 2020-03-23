import React, { useState } from 'react'

const Pages = ({selected,handleClick}) => {
    // eslint-disable-next-line
    let array = [];
    for(let i = 1; i <= selected; i++){
        array.push(i);
    }
    
    handleClick = () => {}

    return(
        <div>
            {
                array.map(el => <button onClick={handleClick}>{el}</button>)
            }
        </div>
    )
}

export default Pages