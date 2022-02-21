const Employee = require('./../src/Employee');

describe('test employee class', () => {

    // Create new employee
    it('can create new employee', () => {
        const employee = new Employee("name", 147, "blah@test.com")
        expect(employee).toBeInstanceOf(Employee);
    })

    // Sets name
    it('can set a new name property in the constructor function', () => {
        const name = "Name";
        const employee = new Employee(name, 236, "blah@test.com");
        expect(employee.name).toBe(name);
    })

    // Sets ID
    it("can set a new id in the constructor function", () => {
        const id = "1234";
        const employee = new Employee("name", id, "blah@test.com");
        expect(employee.id).toBe(id);
    });

    // Sets email
    it("can set a new email in the constructor function", () => {
        const email = "testing@test.com";
        const employee = new Employee("name", "369", email);
        expect(employee.email).toBe(email);
    });
    
    // Method functions
    // test getName()
    it('can get the employee name by calling the getName() method', () => {
        const truth = "Name";
        const employee = new Employee(truth, 147, 'blah@test.com');
        const result = employee.getName();
        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the employee email by calling the getEmail() method", () => {
        const truth = "blah@test.com";
        const employee = new Employee("name", 258, truth);
        const result = employee.getEmail();
        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the employee id by the calling getId() method", () => {
        const truth = "369";
        const employee = new Employee("name", truth, 'blah@test.com');
        const result = employee.getId();
        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the employee role by calling the getRole() method", () => {
        const truth = "Employee";
        const employee = new Employee("name", 385, 'blah@test.com');
        const result = employee.getRole();
        expect(result).toBe(truth);
    });
})