import React from 'react'

const Forma = ({string}) => {

    return (
        <form>
            <input type="text"></input>
            <input type="button" value={string}></input>
        </form>
    )
    
}

export default Forma