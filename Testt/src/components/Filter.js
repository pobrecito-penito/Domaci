import React from 'react'

const Filter = ({handleChange}) => {
    
    return(
        <select onChange={(e) => handleChange(e)}>
            <option>Select...</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={24}>24</option>
        </select>
    )

}

export default Filter