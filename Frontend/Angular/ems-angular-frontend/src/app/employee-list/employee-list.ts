import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employees: Employee[];

  // ngOnInit(): void {
  //   this.employees = [
  //     {
  //       "id": 1,
  //       "firstName": "Rohit",
  //       "lastName": "Shelar",
  //       "email": "rps@yahoo.com"
  //     },
  //     {
  //       "id": 2,
  //       "firstName": "Eva",
  //       "lastName": "Shelar",
  //       "email": "eva@gmail.com"
  //     }
  //   ];
  // }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
}
