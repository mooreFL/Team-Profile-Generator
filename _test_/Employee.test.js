const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test ("Can instantiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})
