import { Component, Input, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  employee: EmployeeComponent = new EmployeeComponent;
}

