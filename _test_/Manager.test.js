const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");
describe("Manager", () => {
    describe("Extend", () => {
        it("Should create a new project with office number", () => {
            const manager = new Manager("Patrick", 123, "moore@gmail.com","A123");
            expect(manager).toEqual({name: "Patrick", id: 123, email: "moore@gmail.com", officeNumber: "A123"});
        });
    });

    test ("Can get office number with officeNumber function", () => {
        const manager = new Manager("Patrick", 123, "moore@gmail.com","A123");
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    })

    test ("Can get role with getRole function", () => {
        const manager = new Manager("Patrick", 123, "moore@gmail.com","A123");
        expect(manager.getRole()).toBe("Manager");
    })
})