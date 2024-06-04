import { IPerson } from "../Interfaces/IPerson";
import { createPerson, deletePerson, getAllPersons, updatePerson } from "../functions/personFunctions";

const person1: IPerson = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  password: "password123",
  role: { role: "admin" }
};

const person2: IPerson = {
  name: "Jane Smith",
  age: 25,
  email: "jane@example.com",
  password: "password456",
  role: { role: "user" }
};

// CRUD

// Creamos 
// createPerson(person1);
// createPerson(person2);

// Obtenemos todas las personas del sistema
const allPersons = getAllPersons();
console.log("All persons:", allPersons);

// // Actualizamos la información de una persona
// updatePerson("John Doe", { age: 31 });
// console.log("Updated person:", getAllPersons().find(person => person.name === "John Doe"));

// // Eliminamos una persona del sistema
// deletePerson("Jane Smith");
// console.log("Remaining persons:", getAllPersons());
