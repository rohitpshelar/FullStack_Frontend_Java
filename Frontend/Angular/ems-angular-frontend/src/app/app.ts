import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [ EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ems-angular-frontend');
}
