import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
       {
            "id": 1,
            "firstname": "Rohit",
            "lastname": "Shelar",
            "email": "rs@rs.com"
        },
        {
            "id": 2,
            "firstname": "Rohit",
            "lastname": "Shelar",
            "email": "rs@gmail.com"
        }
    ]

  return (
    <div>
        
       <h2> List of Employee</h2>
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
                dummyData.map(employee =>
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

export default ListEmployeeComponent