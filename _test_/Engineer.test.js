const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Extend", () => {
        it("Should add engineer with a school value", () => {
            const engineer = new Engineer("Patrick", 123, "moore@gmail.com","mooreFL");
            expect(engineer).toEqual({name: "Patrick", id: 123, email: "moore@gmail.com", gitHub: "mooreFL"});
        });
    });

    test ("Can get gitHub username via getGitHub function", () => {
        const engineer = new Engineer("Patrick", 123, "moore@gmail.com","mooreFL");
        expect(engineer.getGitHub()).toBe(engineer.gitHub);
    })

    test ("Can get role with getRole function", () => {
        const engineer = new Engineer("Patrick", 123, "moore@gmail.com","mooreFL");
        expect(engineer.getRole()).toBe("Engineer");
    })
})