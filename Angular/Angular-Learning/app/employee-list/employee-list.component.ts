import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<EmployeeComponent> = [
    {
		id: '1', 
		name: 'Sameera', 
		salary: 10000, 
		permanent: true, 
		department: { id: '1', name: 'Payroll' }, 
		skills: [{ id: '1', name: 'HTML' }, { id: '2', name: 'Sql' }],
		dateOfBirth: new Date('02/10/1999')
	},
    {
		id: '2', 
		name: 'Sherin', 
		salary: 10000, 
		permanent: false, 
		department: { id: '2', name: 'Finance' }, 
		skills: [{ id: '2', name: 'Sql' }, { id: '3', name: 'Java' }], 
		dateOfBirth: new Date('02/10/1999')
	},
    {
		id: '3', 
		name: 'Ram', 
		salary: 10000, 
		permanent: true, 
		department: { id: '1', name: 'Payroll' }, 
		skills: [{ id: '1', name: 'HTML' }, { id: '3', name: 'Java' }], 
		dateOfBirth: new Date('02/10/1999')
	},
    {
		id: '4', 
		name: 'Vignesh', 
		salary: 10000, 
		permanent: false, 
		department: { id: '3', name: 'HR' }, 
		skills: [{ id: '1', name: 'HTML' }, { id: '2', name: 'Sql' }], 
		dateOfBirth: new Date('02/10/1999')
	},
    {
		id: '5', 
		name: 'Priya', 
		salary: 10000, 
		permanent: true, 
		department: { id: '2', name: 'Finance' }, 
		skills: [{ id: '2', name: 'Sql' }, { id: '3', name: 'Java' }], 
		dateOfBirth: new Date('02/10/1999')
	}];
  constructor() { }
  ngOnInit(): void {
  }
  search='';
  filter = '';
    filteredEmployees: EmployeeComponent[]=this.employees;
    search(event): void {
      this.filter = event.target.value;
      this.filteredEmployees = this.employees.filter(name => name.name.includes(this.filter))
    }
  

}
