import {Employee} from './employee';

class EmployeeTest{
    employee: Employee;

    constructor(employee:Employee) {
        this.employee = employee;
    }

    display() {
        console.log(this.employee);
    }
}

var emp:Employee = {
    id: 1,
    name:"Sameera",
    salary:1000,
    permanent:true,
    department:  {
        id: 136,
        name: "cde"
    },
    skill: [
        {
            id: 1,
            name: "java"
        },
        {
            id: 2,
            name:"sql"
        }
    ]
}
var empObj = new EmployeeTest(emp);
empObj.display();