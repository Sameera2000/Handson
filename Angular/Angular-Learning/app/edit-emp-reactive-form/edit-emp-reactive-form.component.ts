import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeComponent } from '../employee/employee.component';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive-form',
  templateUrl: './edit-emp-reactive-form.component.html',
  styleUrls: ['./edit-emp-reactive-form.component.css']
})


export class EditEmpReactiveFormComponent implements OnInit {
  employee = new EmployeeComponent();
  departments: { id: number; name: string; }[] = [];
  empForm!: FormGroup;

  constructor(private route : ActivatedRoute, private employeeService: EmployeeService) { 
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
    this.employee= this.employeeService.getEmployee(employeeId);
  }

  ngOnInit(): void {
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Computer" },
      { id: 3, name: "HR" }
    ];

    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [ 
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]),
      salary: new FormControl(this.employee.salary, [
        Validators.required
      ]),
      permanent: new FormControl(this.employee.permanent, [
        Validators.required
      ]),
      department: new FormControl(this.employee.department, [
        Validators.required
      ])
    });
  }

  get department() {
    return this.empForm.get('department');
  }
  get permanent() {
    return this.empForm.get('permanent');
  }
  get salary() {
    return this.empForm.get('salary');
  }
  get name() {
    return this.empForm.get('name');
  }


  onSubmit() {
    console.log(this.empForm);
  }
}
