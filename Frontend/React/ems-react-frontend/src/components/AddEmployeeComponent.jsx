import React, { useEffect, useState } from 'react'
import { addEmployee, findById, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

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

        const errorsCopy = { ...errors }

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

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {

            const employee = { firstName, lastName, email }
            console.log(employee)

            // Update http call
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employee');
                }).catch(error => {
                    console.error(error);
                })
            } 


            // Http Call
             if (!id) {
                addEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employee');
                })
            }
        }
    }
    const { id } = useParams();
    useEffect(() => {
        console.log('useEffect');
        console.log(id);
        if (id) {
            findById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
        }
    }, [id])

    function listEmployee(id) {
        navigator(`/employee`)
    }


    function pageTitle() {
        console.log('pageTitle');
        console.log(id);
        if (id) {
            return <h2>Update Employee</h2>
        } else {
            return <h2>Add Employee</h2>
        }
    }

    return (
        <>
            <section className="get-in-touch">
                {pageTitle()}
                <form className="contact-form row">
                    <div className="form-group">
                        <label className='form-lable'>First Name</label>
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
                    <button type="submit" className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
                <h6>  </h6>
                <button className="btn btn-primary" onClick={listEmployee}>Back</button>
            </section>
        </>

    )
}

export default AddEmployeeComponent