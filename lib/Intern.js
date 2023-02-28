const Employee = require("./Employee");

class Intern extends Employee   {


      constructor(name, id,   email, school )
      //addtinal school parameter
     {
        super(name, id, email);
        this.school = school;
    }
    //criteria functions
    getSchool() {
        return   this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;