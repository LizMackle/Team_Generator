const Intern = require('./../src/Intern');

describe('test Intern class', () => {

    it('can create new intern', () => {
        const intern = new Intern("name", 147, "blah@test.com", "github")
        expect(intern).toBeInstanceOf(Intern);
    })

    // Sets name
    it('can set a new name property in the constructor function', () => {
        const name = "Name";
        const intern = new Intern(name, 236, "blah@test.com", "github");
        expect(intern.name).toBe(name);
    })

    // Sets ID
    it("can set a new id in the constructor function", () => {
        const id = "1234";
        const intern = new Intern("name", id, "blah@test.com", "github");
        expect(intern.id).toBe(id);
    });

    // Sets email
    it("can set a new email in the constructor function", () => {
        const email = "testing@test.com";
        const intern = new Intern("name", "369", email, "github");
        expect(intern.email).toBe(email);
    });
    
    // Method functions
    // test getName()
    it('can get the intern name by calling the getName() method', () => {
        const truth = "Name";
        const intern = new Intern(truth, 147, 'blah@test.com');
        const result = intern.getName();
        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the intern email by calling the getEmail() method", () => {
        const truth = "blah@test.com";
        const intern = new Intern("name", 258, truth);
        const result = intern.getEmail();
        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the intern id by the calling getId() method", () => {
        const truth = "369";
        const intern = new Intern("name", truth, 'blah@test.com');
        const result = intern.getId();
        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the intern role by calling the getRole() method", () => {
        const truth = "Intern";
        const intern = new Intern("name", 385, 'blah@test.com');
        const result = intern.getRole();
        expect(result).toBe(truth);
    });
})