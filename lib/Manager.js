const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getrole() {
    return "Manager";
  }

  getOfficenumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;

// create another test file for manager, place in test folder
// test for officenumber
// test only for getofficenumber
//test getrole that it returns "manager"