import { AnimalSleepsAndWalks } from "./Animal.ts";
import type { AnimalType } from "./Animal.ts";

export type ElephantType = AnimalType & {
  weight: number;
};

export class Elephant extends AnimalSleepsAndWalks {
  private weight: ElephantType["weight"];

  constructor({ name, age, weight }: ElephantType) {
    super({ name, age });
    this.weight = weight;
  }

  getWeight(): ElephantType["weight"] {
    return this.weight;
  }

  getElephant() {
    return {
      name: this.name,
      age: this.age,
      weight: this.weight,
    };
  }
}
