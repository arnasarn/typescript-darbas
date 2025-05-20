import { AnimalJumpsAndRuns } from "./Animal.ts";
import type { AnimalType } from "./Animal.ts";

export type ZebraType = AnimalType & {
  maxSpeed: number;
  origin: string;
};

export class Zebra extends AnimalJumpsAndRuns {
  private maxSpeed: ZebraType["maxSpeed"];
  private origin: ZebraType["origin"];

  constructor({ name, age, maxSpeed, origin }: ZebraType) {
    super({ name, age });
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }

  getMaxSpeed(): ZebraType["maxSpeed"] {
    return this.maxSpeed;
  }

  getOrigin(): ZebraType["origin"] {
    return this.origin;
  }

  getZebra() {
    return {
      name: this.name,
      age: this.age,
      maxSpeed: this.maxSpeed,
      origin: this.origin,
    };
  }
}
