"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(employee) {
        this.employee = employee;
    }
    EmployeeTest.prototype.display = function () {
        console.log(this.employee);
    };
    return EmployeeTest;
}());
var emp = {
    id: 1,
    name: "Sameera",
    salary: 1000,
    permanent: true,
    department: {
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
            name: "sql"
        }
    ]
};
var empObj = new EmployeeTest(emp);
empObj.display();
