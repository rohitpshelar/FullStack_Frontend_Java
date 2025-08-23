import React, { useEffect, useState } from 'react'
import { listEmployees, removeEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'

const ListEmployeeComponentRest = () => {

  const [employee, setEmployee] = useState([])

  useEffect(() => {
    getAllEmployee();
  }, [])

  function getAllEmployee() {
    listEmployees().then((response) => {
      setEmployee(response.data);
    }).catch(error => {
      console.error(error);
    })
  }

  const navigator = useNavigate();

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(ids) {
    console.log('updateEmployee');
    console.log(ids);
    navigator(`/update-employee/${ids}`)
  }

  function deleteEmployee(idd) {
    console.log('deleteEmployee');
    console.log(idd);
    removeEmployee(idd).then((response) => {
      getAllEmployee();
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div>

      <h2> List of Employee From  Spring boot </h2>
      <h6>  'http://localhost:8080/api/employee'</h6>
      <button className="btn btn-success" onClick={addNewEmployee}>Add Employee</button>
      <h6>  </h6>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employee.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-warning px-4 me-3' onClick={() => updateEmployee(employee.id)}>Update </button>
                   
                  <button className='btn btn-danger px-4' onClick={() => deleteEmployee(employee.id)}>Delete </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>


    </div>
  )
}

export default ListEmployeeComponentRest