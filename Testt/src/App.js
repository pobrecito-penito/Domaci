import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllEmployees, newEmployee } from './service/service';
import EmployeeList from './components/EmployeeList';
import Filter from './components/Filter';
import Pages from './components/Pages';

function App() {
  const [employees,setEmployees] = useState([]);
  
  
  useEffect(() => {
    getAllEmployees().then(res => {
      setEmployees(res.data.data);
      setEmpl(employees)});
  })

  const [counter,setCounter] = useState(24);
  const [selected,setSelected] = useState(0);
  
  const [counter1,setCounter1] = useState(0);
  const [counter2,setCounter2] = useState(5);


  const handleChange = (e) => {
    let selectedd = e.target.value;
    setCounter(selectedd);
    setSelected(Math.ceil(selectedd/5));
    setCounter2(counter);
  }
   
  const [empl, setEmpl] = useState(employees);
  
  const handleClick = () => {
      setCounter1(counter1 + 5);
      setCounter2(counter2 + 5);
      setEmpl(employees.slice(counter1,counter2));
    
  }

  
  
  
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const[salary,setSalary] = useState('');
  const addEmpl = (name,age,salary) => {
    newEmployee(name,age,salary).then(res=>console.log(res)
    );
  }

  return (
    <>
    <div>
      <Filter handleChange={handleChange} />
    </div>
    <EmployeeList employees={employees.slice(0,counter)} />
    <div>
      <input type="text" onInput={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" onInput={(e) => setAge(e.target.value)} placeholder="age" />
      <input type="number" onInput={(e) => setSalary(e.target.value)} />
      <button onClick={() => addEmpl(name,age,salary)}>Add</button>
    </div>
    <Pages selected={selected} handleClick={handleClick} />
    <EmployeeList employees={employees.slice(counter1)} />
    </>
  );
}

export default App;
