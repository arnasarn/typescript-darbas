export type AnimalType = {
  name: string;
  age: number;
};

export class Animal {
  protected name: AnimalType["name"];
  protected age: AnimalType["age"];

  constructor({ name, age }: AnimalType) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Raah!");
  }
}

export class AnimalSleepsAndWalks extends Animal {
  sleep(): void {
    console.log(`${this.name} is sleeping.`);
  }

  walk(): void {
    console.log(`${this.name} is walking.`);
  }
}

export class AnimalJumpsAndRuns extends Animal {
  jump(): void {
    console.log(`${this.name} is jumping.`);
  }

  run(): void {
    console.log(`${this.name} is running.`);
  }
}

export class AnimalSwimsAndHunts extends Animal {
  sleep(): void {
    console.log(`${this.name} is swimming.`);
  }

  walk(): void {
    console.log(`${this.name} is hunting.`);
  }
}
