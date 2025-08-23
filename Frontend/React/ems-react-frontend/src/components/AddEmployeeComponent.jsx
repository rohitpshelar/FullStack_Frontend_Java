import React, { useState } from 'react'
import { addEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    // Read Value type 1
    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    // Read Value type 2
    const handleLastName = (e) => setLastName(e.target.value);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    //  Validation
    function validateForm() {
        let valid = true;

        const errorsCopy = { ... errors}

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

         if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

         if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;

    }

    //Redirect after success
    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log("before http 1")
            console.log(employee)
            console.log("before http 2")

            // Http Call
            addEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employee')
            })
        }
    }

function listEmployee(){
        navigator('/employee')
    }



    return (
        <>
            <div>AddEmployeeComponent</div>
            <form className="contact-form row">
                <div className="form-field col-lg-6">
                    <label className='col-sm-2 col-form-label'>First Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        name='firstName'
                        value={firstName}
                        onChange={handleFirstName}></input>
                        {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>
                <div className="form-group">
                    <label className='form-lable'>Last Name</label>
                    <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name='lastName' value={lastName} onChange={handleLastName}></input>
                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                <div className="form-group">
                    <label className='form-lable'>Email</label>
                    <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <h6>  </h6>
                <button type="submit" className="btn btn-success" onClick={saveEmployee}>Submit</button>
            </form>
            <h6>  </h6>
            <button className="btn btn-primary" onClick={listEmployee}>Back</button>
        </>

    )
}

export default AddEmployeeComponent