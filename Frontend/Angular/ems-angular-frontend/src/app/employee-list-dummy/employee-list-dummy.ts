import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list-dummy',
  imports: [],
  templateUrl: './employee-list-dummy.html',
  styleUrl: './employee-list-dummy.css'
})
export class EmployeeListDummy implements OnInit{
  employees: Employee[];

  ngOnInit(): void {
    this.employees = [
      {
        "id": 1,
        "firstName": "Rohit",
        "lastName": "Shelar",
        "email": "rps@yahoo.com"
      },
      {
        "id": 2,
        "firstName": "Eva",
        "lastName": "Shelar",
        "email": "eva@gmail.com"
      }
    ];
  }
}
