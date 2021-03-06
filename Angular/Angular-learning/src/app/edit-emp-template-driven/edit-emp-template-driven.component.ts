import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {
  employee = new EmployeeComponent();
  departments: { id: number; name: string; }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];
  }

  onSubmit() {
    console.log(empForm);
  }
}
function empForm(empForm: any) {
  throw new Error('');
}

