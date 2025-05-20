import type { AnimalType } from "../animals/Animal.ts";
import { Employee } from "./Employee.ts";

export class Zookeeper extends Employee {
  takeSafetyTrainings(): void {
    console.log("Taking zookeeper safety training");
  }

  feedAnimal(animal: AnimalType) {
    console.log(`Zookeeper fed ${animal.name} at ${new Date()}`);
  }

  getZookeeper() {
    return {
      name: this.name,
      isEmployeeAtZoo: this.isEmployeeAtZoo,
      safetyTrainingCompletionDate: this.safetyTrainingCompletionDate,
    };
  }
}
