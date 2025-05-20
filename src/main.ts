import { Animals } from "./features/animals/Animals.ts";
import { Elephant } from "./features/animals/Elephant.ts";
import { Tiger } from "./features/animals/Tiger.ts";
import { Zebra } from "./features/animals/Zebra.ts";
import { Employees } from "./features/employees/Employees.ts";
import { Zookeeper } from "./features/employees/Zookeeper.ts";
import { Logger } from "./features/Logger.ts";

const logger = Logger.getInstance();

const animals = new Animals();
const employees = new Employees();

const animalTypeInput: HTMLSelectElement = document.getElementById(
  "animalType"
) as HTMLSelectElement;
const animalFormWrapper: HTMLDivElement = document.getElementById(
  "animal-form-fields"
) as HTMLDivElement;
const logAnimalsButton: HTMLButtonElement = document.getElementById(
  "logAnimals"
) as HTMLButtonElement;

animalTypeInput.addEventListener("input", () => {
  if (animalTypeInput.value === "---") animalFormWrapper.innerHTML = "";

  //ELEPHANT----------------------------------------------------------

  if (animalTypeInput.value === "elephant") {
    animalFormWrapper.innerHTML = "";

    const animalName: HTMLInputElement = document.createElement("input");
    animalName.setAttribute("placeholder", "Please enter animal name");
    animalFormWrapper.append(animalName);

    const animalAge: HTMLInputElement = document.createElement("input");
    animalAge.setAttribute("placeholder", "Please enter animal age");
    animalFormWrapper.append(animalAge);

    const animalWeight: HTMLInputElement = document.createElement("input");
    animalWeight.setAttribute("placeholder", "Please enter animal weight");
    animalFormWrapper.append(animalWeight);

    const submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.textContent = "Add animal to zoo";
    animalFormWrapper.append(submitButton);

    submitButton.addEventListener("click", () => {
      const elephant = new Elephant({
        name: animalName.value,
        age: +animalAge.value,
        weight: +animalWeight.value,
      });

      animals.insertAnimal(elephant.getElephant());
      logger.log(`Added Elephant: ${JSON.stringify(elephant.getElephant())}`);
    });
  }

  //----------------------------------------------------------

  //TIGER----------------------------------------------------------
  if (animalTypeInput.value === "tiger") {
    animalFormWrapper.innerHTML = "";

    const animalName: HTMLInputElement = document.createElement("input");
    animalName.setAttribute("placeholder", "Please enter animal name");
    animalFormWrapper.append(animalName);

    const animalAge: HTMLInputElement = document.createElement("input");
    animalAge.setAttribute("placeholder", "Please enter animal age");
    animalFormWrapper.append(animalAge);

    const tigerStatus: HTMLInputElement = document.createElement("input");
    tigerStatus.setAttribute("type", "checkbox");
    tigerStatus.setAttribute("id", "status");

    const statusLabel: HTMLLabelElement = document.createElement("label");
    statusLabel.setAttribute("for", "status");
    statusLabel.textContent = "Has tiger been outside cage the past 8 hours?";
    animalFormWrapper.append(statusLabel);
    animalFormWrapper.append(tigerStatus);

    const submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.textContent = "Add animal to zoo";
    animalFormWrapper.append(submitButton);

    submitButton.addEventListener("click", () => {
      const tiger = new Tiger({
        name: animalName.value,
        age: +animalAge.value,
        wasOutsideCagePast8Hrs: tigerStatus.checked,
      });

      animals.insertAnimal(tiger.getTiger());
      logger.log(`Added Tiger: ${JSON.stringify(tiger.getTiger())}`);
    });
  }

  //----------------------------------------------------------

  //ZEBRA----------------------------------------------------------

  if (animalTypeInput.value === "zebra") {
    animalFormWrapper.innerHTML = "";

    const animalName: HTMLInputElement = document.createElement("input");
    animalName.setAttribute("placeholder", "Please enter animal name");
    animalFormWrapper.append(animalName);

    const animalAge: HTMLInputElement = document.createElement("input");
    animalAge.setAttribute("placeholder", "Please enter animal age");
    animalFormWrapper.append(animalAge);

    const animalMaxSpeed: HTMLInputElement = document.createElement("input");
    animalMaxSpeed.setAttribute("placeholder", "Please enter animal max speed");
    animalFormWrapper.append(animalMaxSpeed);

    const animalOrigin: HTMLInputElement = document.createElement("input");
    animalOrigin.setAttribute("placeholder", "Please enter animal origin");
    animalFormWrapper.append(animalOrigin);

    const submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.textContent = "Add animal to zoo";
    animalFormWrapper.append(submitButton);

    submitButton.addEventListener("click", () => {
      const zebra = new Zebra({
        name: animalName.value,
        age: +animalAge.value,
        maxSpeed: +animalMaxSpeed.value,
        origin: animalOrigin.value,
      });

      animals.insertAnimal(zebra.getZebra());
      logger.log(`Added Zebra: ${JSON.stringify(zebra.getZebra())}`);
    });
  }

  //----------------------------------------------------------
});

logAnimalsButton.addEventListener("click", () => {
  console.log(logger.getLogs());
});

//EMPLOYEE FORM

const employeeNameInput: HTMLInputElement = document.getElementById(
  "employeeName"
) as HTMLInputElement;

const isAtZooInput: HTMLInputElement = document.getElementById(
  "isAtZoo"
) as HTMLInputElement;

const employeeSubmitButton: HTMLButtonElement = document.getElementById(
  "addEmployee"
) as HTMLButtonElement;

const logEmpsButton: HTMLButtonElement = document.getElementById(
  "logEmps"
) as HTMLButtonElement;

employeeSubmitButton.addEventListener("click", () => {
  const employee = new Zookeeper({
    name: employeeNameInput.value,
    isEmployeeAtZoo: isAtZooInput.checked,
    safetyTrainingCompletionDate: new Date(),
  });

  employees.insertEmployee(employee.getZookeeper());
  logger.log(`Added Employee: ${JSON.stringify(employee.getZookeeper())}`);
});

logEmpsButton.addEventListener("click", () => {
  console.log(logger.getLogs());
});

const testkeeper = new Zookeeper({
  name: "TestJohn",
  isEmployeeAtZoo: false,
  safetyTrainingCompletionDate: new Date(),
});

testkeeper.feedAnimal({ name: "Cat", age: 5 }, logger);
