import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id = '3';
  name = 'Sameera';
  salary = 10000;
  permanent = true;
  department = {id: '1', name: 'Payroll'};
  skills = [{id: '1', name: 'HTML'}, {id: '2', name: 'Sql'}, {id: '3', name: 'Java'}];
  dateOfBirth = new Date('12/31/2000');
  constructor() { }

  ngOnInit(): void {
    
  }

}
