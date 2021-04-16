const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test ("Can instantiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test ("Can set name through constructor arguements", () => {
    const employee = new Employee("Patrick");
    expect(employee.name).toBe("Patrick");
})

test ("Can get name via getName()", () => {
    const employee = new Employee("Patrick");
    expect(employee.getName()).toBe("Patrick");
})

//add test for id

// add test for email

// add test for getid

// add test for getEmail

// add test for getRole

