import axios from 'axios'

const getAllEmployees = () => {
    return axios.get('http://dummy.restapiexample.com/api/v1/employees');
}

const newEmployee = (name,salary,age) => {
    return axios.post('http://dummy.restapiexample.com/api/v1/create',{name:name, salary:salary,age:age})
}

export { getAllEmployees, newEmployee }