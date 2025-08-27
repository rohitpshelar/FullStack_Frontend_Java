import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListDummy } from "./employee-list-dummy/employee-list-dummy";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeListDummy],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ems-angular-frontend');
}
