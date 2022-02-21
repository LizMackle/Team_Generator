const Manager = require('./../src/Manager');

describe('test Manager class', () => {

    it('can create new manager', () => {
        const manager = new Manager("name", 147, "blah@test.com", "github")
        expect(manager).toBeInstanceOf(Manager);
    })

    // Sets name
    it('can set a new name property in the constructor function', () => {
        const name = "Name";
        const manager = new Manager(name, 236, "blah@test.com", "github");
        expect(manager.name).toBe(name);
    })

    // Sets ID
    it("can set a new id in the constructor function", () => {
        const id = "1234";
        const manager = new Manager("name", id, "blah@test.com", "github");
        expect(manager.id).toBe(id);
    });

    // Sets email
    it("can set a new email in the constructor function", () => {
        const email = "testing@test.com";
        const manager = new Manager("name", "369", email, "github");
        expect(manager.email).toBe(email);
    });
    
    // Method functions
    // test getName()
    it('can get the manager name by calling the getName() method', () => {
        const truth = "Name";
        const manager = new Manager(truth, 147, 'blah@test.com');
        const result = manager.getName();
        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the manager email by calling the getEmail() method", () => {
        const truth = "blah@test.com";
        const manager = new Manager("name", 258, truth);
        const result = manager.getEmail();
        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the manager id by the calling getId() method", () => {
        const truth = "369";
        const manager = new Manager("name", truth, 'blah@test.com');
        const result = manager.getId();
        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the manager role by calling the getRole() method", () => {
        const truth = "Manager";
        const manager = new Manager("name", 385, 'blah@test.com');
        const result = manager.getRole();
        expect(result).toBe(truth);
    });
})