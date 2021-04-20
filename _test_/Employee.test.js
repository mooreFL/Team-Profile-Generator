// 
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it ("Should create an object with employee name, id, and email", () => {
        const employee = new Employee("Patrick", 123, "moore@gmail.com");
        expect(employee).toEqual({name: "Patrick", id: 123, email: "moore@gmail.com"});
        
        });
    });
    test ("Can instantiate Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })
    
    test ("get name with getName function", () => {
        const employee = new Employee("Patrick", 123, "moore@gmail.com");
        expect(employee.getName()).toBe(employee.name);
    })

    test ("get id with getId function", () => {
        const employee = new Employee("Patrick", 123, "moore@gmail.com");
        console.log(employee.id);
        expect(employee.getId()).toBe(employee.id);
    })

    test ("get email with getEmail function", () => {
        const employee = new Employee("Patrick", 123, "moore@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    test ("get role with getRole function", () => {
        const employee = new Employee("Patrick", 123, "moore@gmail.com");
        expect(employee.getRole()).toBe('Employee');
    })    
})













//add test for id

// add test for email

// add test for getid

// add test for getEmail

// add test for getRole

