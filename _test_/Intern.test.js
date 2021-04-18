const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Extend", () => {
        it("Should add intern with a school value", () => {
            const intern = new Intern("Patrick", 123, "moore@gmail.com","UCF");
            expect(intern).toEqual({name: "Patrick", id: 123, email: "moore@gmail.com", school: "UCF"});
        });
    });

    test ("Can get school via getSchool function", () => {
        const intern = new Intern("UCF");
        expect(intern.getSchool()).toBe(intern.school);
    })

    test ("Can get role with getRole function", () => {
        const intern = new Intern("Intern");
        expect(intern.getRole()).toBe("Intern");
    })
})