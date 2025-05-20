import type { EmployeeType } from "./Employee";

export class Employees {
  private employees: EmployeeType[];

  constructor() {
    this.employees = [];
  }

  insertEmployee(employee: EmployeeType) {
    this.employees.push(employee);
  }

  getAllEmployees() {
    return this.employees;
  }
}
