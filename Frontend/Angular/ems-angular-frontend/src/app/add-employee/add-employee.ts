import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, RouterLink],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployee implements OnInit {

  ngOnInit(): void {
  }


  employee: Employee = new Employee();

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
