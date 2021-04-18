const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const teamArray = [];

// first function to create manager, run through all manager questions. When done run .then; create the new manager. When finished call the create team function
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: chalk.green("Enter the manager's name"),
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
          message: chalk.green("What is the manager's id?"),
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
          message: chalk.green("What is the manager's email?"),
          validate: (data) => {
            if (data.match(/\S+@\S+\.\S+/)) {
              return true;
            }
            return "Please enter an email.";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: chalk.green("What is the manager's office number?"),
          validate: (data) => {
            if (data !== "") {
              return true;
            }
            return "Please enter a number.";
          },
        },
        {
            type: "list",
            name: "newCreate",
            message: chalk.green("Would you like to add a new team member?"),
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else']
        }
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamArray.push(manager);
        let continueAdd = answers.newCreate !== 'I do not need to add anyone else';
        let memberType = answers.newCreate;
        while(continueAdd) {
            if (memberType === 'Manager') {
                createManager();

            }
            else if (memberType === 'Engineer') {
                createEngineer();

            }
            else if (memberType === 'Intern') {
                createIntern();

            }
            return
        }
        console.log(teamArray);
      });
  };

  createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: chalk.red("Enter the engineer's name"),
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
          message: chalk.red("What is the engineer's id?"),
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
          message: chalk.red("What is the engineer's email?"),
          validate: (data) => {
            if (data.match(/\S+@\S+\.\S+/)) {
              return true;
            }
            return "Please enter an email.";
          },
        },
        {
          type: "input",
          name: "gitHubUserName",
          message: chalk.red("What is the engineer's GitHub user name?"),
          validate: (data) => {
            if (data !== "") {
              return true;
            }
            return "Please enter a valid user name.";
          },
        },
        {
            type: "list",
            name: "newCreate",
            message: chalk.red("Would you like to add a new team member?"),
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else']
        }
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHubUserName,
        );
        teamArray.push(engineer);
        let continueAdd = answers.newCreate !== 'I do not need to add anyone else';
        let memberType = answers.newCreate;
        while(continueAdd) {
            if (memberType === 'Manager') {
                createManager();

            }
            else if (memberType === 'Engineer') {
                createEngineer();

            }
            else if (memberType === 'Intern') {
                createIntern();

            }
            return
        }
        console.log(teamArray);
      });
  };

  createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: chalk.yellow("Enter the intern's name"),
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
          message: chalk.yellow("What is the intern's id?"),
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
          message: chalk.yellow("What is the intern's email?"),
          validate: (data) => {
            if (data.match(/\S+@\S+\.\S+/)) {
              return true;
            }
            return "Please enter an email.";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: chalk.yellow("What is the intern's school?"),
          validate: (data) => {
            if (data !== "") {
              return true;
            }
            return "Please enter a school.";
          },
        },
        {
            type: "list",
            name: "newCreate",
            message: chalk.yellow("Would you like to add a new team member?"),
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else']
        }
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school,
        );
        teamArray.push(intern);
        let continueAdd = answers.newCreate !== 'I do not need to add anyone else';
        let memberType = answers.newCreate;
        while(continueAdd) {
            if (memberType === 'Manager') {
                createManager();

            }
            else if (memberType === 'Engineer') {
                createEngineer();

            }
            else if (memberType === 'Intern') {
                createIntern();

            }
            return
        }
        console.log(teamArray);
      });
  };
  createManager();








//createteam: will have one question (list) with three options, I.E. Intern, Engineer, Finish building my team

//based on answers you will have a .then, run a switch case
//i.e.: if engineer then run engineer function
//if "finish building team" is selected then create everything that was selected

// two more functions exactly like engineer but for manager and intern
// at end of both call create team function

//push the created to the array that will end up in the html
// the last function will pass the array to the function that renders the html
