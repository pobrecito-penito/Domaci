import React from 'react'
import Employee from './Employee'

const EmployeeList = ({employees}) => {

    return(
        <div>
            {employees.map(el => <Employee key={el.id} info={el} /> )}
        </div>
    )

}

export default EmployeeList