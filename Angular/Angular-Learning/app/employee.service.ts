import { Injectable, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

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
  getAllEmployees(): EmployeeComponent[]{
    return this.employeeList;
  }

  getEmployee(employeeId){
    for(var i=0; i<this.employeeList.length; i++){
      if(this.employeeList[i].id===employeeId){
        return this.employeeList[i];
      }
    }
  }
}
