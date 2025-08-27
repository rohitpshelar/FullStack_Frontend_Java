import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';
import { EmployeeListDummy } from './employee-list-dummy/employee-list-dummy';

export const routes: Routes = [
    {path: 'employees',  component: EmployeeList},
    {path: 'employees/add-employee', component: AddEmployee},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
    
];
