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
menu = () => {
  createManager = () => {
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
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        console.log(manager);
        teamArray.push(manager);
        createTeam();
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
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.userName
        );
        teamArray.push(engineer);
        createTeam();
      });
  };

  createEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: chalk.blue("Enter the employee's name"),
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
          message: chalk.blue("What is the employee's id?"),
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
          message: chalk.blue("What is the employee's email?"),
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
          message: chalk.blue("What is the employee's office number?"),
          validate: (data) => {
            if (data !== "") {
              return true;
            }
            return "Please enter a office number.";
          },
        },
      ])
      .then((answers) => {
        const employee = new Employee(
          answers.name,
          answers.id,
          answers.email
        );
        teamArray.push(employee);
        createTeam();
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
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamArray.push(intern);
        createTeam();
      });
  };
  createManager();
};

menu();






//createteam: will have one question (list) with three options, I.E. Intern, Engineer, Finish building my team

//based on answers you will have a .then, run a switch case
//i.e.: if engineer then run engineer function
//if "finish building team" is selected then create everything that was selected

// two more functions exactly like engineer but for manager and intern
// at end of both call create team function

//push the created to the array that will end up in the html
// the last function will pass the array to the function that renders the html
