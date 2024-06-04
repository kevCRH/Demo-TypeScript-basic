import { IPerson } from "../Interfaces/IPerson";
import * as fs from "fs";
import * as path from "path";

const FILE_PATH = path.join(__dirname, "../DB/Person.JSON");

// Create: Funcion para crear una persona
export function createPerson(person: IPerson): void {
  try {
    const existingData = readDataFromFile();
    existingData.push(person);
    writeDataToFile(existingData);
    console.log("Person added successfully.");
  } catch (error) {
    console.error("Error creating person:", error);
  }
}

// Read: Funcion para obtener todas las personas  
export function getAllPersons(): IPerson[] {
  try {
    return readDataFromFile();
  } catch (error) {
    console.error("Error reading persons:", error);
    return [];
  }
}

// Update: Funcion para actualizar la informacion de una persona
export function updatePerson(name: string, newData: Partial<IPerson>): void {
  try {
    const existingData = readDataFromFile();
    const index = existingData.findIndex(person => person.name === name);
    if (index !== -1) {
      existingData[index] = { ...existingData[index], ...newData };
      writeDataToFile(existingData);
      console.log("Person updated successfully.");
    } else {
      console.log("Person not found.");
    }
  } catch (error) {
    console.error("Error updating person:", error);
  }
}

// Delete: Funcion para eliminar una persona
export function deletePerson(name: string): void {
  try {
    const existingData = readDataFromFile();
    const newData = existingData.filter(person => person.name !== name);
    writeDataToFile(newData);
    console.log("Person deleted successfully.");
  } catch (error) {
    console.error("Error deleting person:", error);
  }
}

// Funcion para leer la informacion de un archivo
function readDataFromFile(): IPerson[] {
  try {
    const data = fs.readFileSync(FILE_PATH, { encoding: "utf8" });
    if (data.trim() === "") {
      return [];
    }
    return JSON.parse(data) as IPerson[];
  } catch (error) {
    console.error("Error reading data from file:", error);
    return [];
  }
}

// Funcion para escribir la informacion en un archivo
function writeDataToFile(data: IPerson[]): void {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
    console.log("Data written to file successfully.");
  } catch (error) {
    console.error("Error writing data to file:", error);
  }
}