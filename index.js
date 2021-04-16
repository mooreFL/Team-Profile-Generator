const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const teamArray = [];

// first function to create manager, run through all manager questions. When done run .then; create the new manager. When finished call the create team function

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
        validate: (data) => {
          if (data !== "") {
            return true;
          }
          return "Please enter a name.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate: (data) => {
          if (data !== "") {
            return true;
          }
          return "Please enter an ID.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (data) => {
          if (data !== "") {
            return true;
          }
          return "Please enter an email.";
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (data) => {
          if (data !== "") {
            return true;
          }
          return "Please enter a number.";
        },
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
      );
      teamArray.push(manager);
      createTeam();
    });
}

//createteam: will have one question (list) with three options, I.E. Intern, Engineer, Finish building my team

//based on answers you will have a .then, run a switch case
//i.e.: if engineer then run engineer function
//if "finish building team" is selected then create everything that was selected

// two more functions exactly like engineer but for manager and intern
// at end of both call create team function

//push the created to the array that will end up in the html
// the last function will pass the array to the function that renders the html
