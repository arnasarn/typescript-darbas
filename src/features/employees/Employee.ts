export type EmployeeType = {
  name: string;
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;
};

export abstract class Employee {
  name: EmployeeType["name"];
  isEmployeeAtZoo: EmployeeType["isEmployeeAtZoo"];
  safetyTrainingCompletionDate: EmployeeType["safetyTrainingCompletionDate"];

  constructor({
    name,
    isEmployeeAtZoo,
    safetyTrainingCompletionDate,
  }: EmployeeType) {
    this.name = name;
    this.isEmployeeAtZoo = isEmployeeAtZoo;
    this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
  }

  enterZoo(): void {
    console.log("Entering zoo");
  }

  leaveZoo(): void {
    console.log("Leaving zoo");
  }

  abstract takeSafetyTrainings(): void;
}
