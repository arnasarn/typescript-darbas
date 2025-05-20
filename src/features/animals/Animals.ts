import type { ElephantType } from "./Elephant.ts";
import type { TigerType } from "./Tiger.ts";
import type { ZebraType } from "./Zebra.ts";

type AnimalTypes = ZebraType | ElephantType | TigerType;

export class Animals {
  private animals: AnimalTypes[];

  constructor() {
    this.animals = [];
  }

  insertAnimal(animal: AnimalTypes) {
    this.animals.push(animal);
  }

  getAllAnimals() {
    return this.animals;
  }
}
