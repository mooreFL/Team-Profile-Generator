const { expect } = require("@jest/globals");
const Manager = require("../lib/Employee");

describe("Manager", () => {
    describe("Extend", () => {
        it ("Should create a new project with office number", () =>{
            const manager = new Manager("A123");
            expect(manager).toEqual("A123");
        })
    })
    test ("get role with getRole function", () => {
        const manager = new Manager("Patrick");
        expect(manager.getRole()).toBe('Manager')
    })
    test ("get office number with officeNumber function", () => {
        const manager = new Manager("A123")
    })
})