const Engineer = require('./../src/Engineer');

describe('test Engineer class', () => {

    it('can create new engineer', () => {
        const engineer = new Engineer("name", 147, "blah@test.com", "github")
        expect(engineer).toBeInstanceOf(Engineer);
    })

    // Sets name
    it('can set a new name property in the constructor function', () => {
        const name = "Name";
        const engineer = new Engineer(name, 236, "blah@test.com", "github");
        expect(engineer.name).toBe(name);
    })

    // Sets ID
    it("can set a new id in the constructor function", () => {
        const id = "1234";
        const engineer = new Engineer("name", id, "blah@test.com", "github");
        expect(engineer.id).toBe(id);
    });

    // Sets email
    it("can set a new email in the constructor function", () => {
        const email = "testing@test.com";
        const engineer = new Engineer("name", "369", email, "github");
        expect(engineer.email).toBe(email);
    });
    
    // Method functions
    // test getName()
    it('can get the engineer name by calling the getName() method', () => {
        const truth = "Name";
        const engineer = new Engineer(truth, 147, 'blah@test.com');
        const result = engineer.getName();
        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the engineer email by calling the getEmail() method", () => {
        const truth = "blah@test.com";
        const engineer = new Engineer("name", 258, truth);
        const result = engineer.getEmail();
        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the engineer id by the calling getId() method", () => {
        const truth = "369";
        const engineer = new Engineer("name", truth, 'blah@test.com');
        const result = engineer.getId();
        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the engineer role by calling the getRole() method", () => {
        const truth = "Engineer";
        const engineer = new Engineer("name", 385, 'blah@test.com');
        const result = engineer.getRole();
        expect(result).toBe(truth);
    });
})