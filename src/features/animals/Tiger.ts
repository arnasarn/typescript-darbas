import { AnimalSwimsAndHunts } from "./Animal.ts";
import type { AnimalType } from "./Animal.ts";

export type TigerType = AnimalType & {
  wasOutsideCagePast8Hrs: boolean;
};

export class Tiger extends AnimalSwimsAndHunts {
  private wasOutsideCagePast8Hrs: TigerType["wasOutsideCagePast8Hrs"];

  constructor({ name, age, wasOutsideCagePast8Hrs }: TigerType) {
    super({ name, age });
    this.wasOutsideCagePast8Hrs = wasOutsideCagePast8Hrs;
  }

  getWasOutsideCagePast8Hrs(): TigerType["wasOutsideCagePast8Hrs"] {
    return this.wasOutsideCagePast8Hrs;
  }

  getTiger() {
    return {
      name: this.name,
      age: this.age,
      wasOutsideCagePast8Hrs: this.wasOutsideCagePast8Hrs,
    };
  }
}
