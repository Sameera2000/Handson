import { Employee } from './employee';
import { Department } from './department';
import { Skill } from './skill';

export class EmployeeTest {
  employee: Employee;
  constructor(emp: Employee) {
    this.employee = emp;
  }
  display() {
    return 'Hello' + this.employee;
  }
}

const dept: Department = {
  id: 1,
  name: 'IT',
};

const skill: Skill[] = [
  { id: 1, name: 'Sql' },
  { id: 2, name: 'Java' },
  { id: 3, name: 'Html'}
];

const employee: Employee = {
  id: 3,
  name: 'Sameera',
  salary: 10000,
  permanent: true,
  dateOfBirth: new Date('12/31/2000'),
  department: dept,
  skill: skill,
};

const emp = new EmployeeTest(employee);
