import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponentRest = () => {

    const [employee, setEmployee] = useState([])

    useEffect(() => {
      listEmployees().then((response) => {
        setEmployee(response.data);
      }).catch(error => {
        console.error(error);
      })
    }, [])
    

  return (
    <div>
        
       <h2> List of Employee From  Spring boot - 'http://localhost:8080/api/employee'</h2>
       <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                employee.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
       </table>
        
        
        </div>
  )
}

export default ListEmployeeComponentRest