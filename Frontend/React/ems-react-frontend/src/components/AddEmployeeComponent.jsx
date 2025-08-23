import React, { useState } from 'react'
import { addEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => setLastName(e.target.value);

    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email}
         console.log("before http 1")
        console.log(employee)
        console.log("before http 2")

        addEmployee(employee).then((response) =>  {
            console.log(response.data);
            navigator('/employee')
        })


    }

  return (
    <>
    <div>AddEmployeeComponent</div>
    <form>
        <div className="form-group">
            <label className='form-lable'>First Name</label>
            <input 
                type="text" 
                className="form-control" 
                name='firstName' 
                value={firstName} 
                onChange={handleFirstName}></input>
        </div>
        <div className="form-group">
            <label className='form-lable'>Last Name</label>
            <input type="text" className="form-control" name='lastName' value={lastName} onChange={handleLastName}></input>
        </div>
        <div className="form-group">
            <label className='form-lable'>Email</label>
            <input type="text" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Submit</button>
    </form>
    </>
    
  )
}

export default AddEmployeeComponent