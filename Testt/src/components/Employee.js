import React from 'react'

const Employee = ({info}) => {
    
    let {employee_name, employee_salary, employee_age} = info;

    return (
        <div>
            <p>{employee_name}, {employee_age}</p>
            <p>{employee_salary}</p>
        </div>
    )
}

export default Employee