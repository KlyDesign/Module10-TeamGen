class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //get name function from specifications in acceptance criteria
    getName() {
        return this.name;
    }
    //same for id
    getId() {
        return this.id;
    }
    //same for email
    getEmail() {
        return this.email;
    }
    //same for role
    getRole() {
        //acceptance says this should return "Employee"
        return "Employee";
    }
}

module.exports = Employee;