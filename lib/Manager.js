const Employee = require('./Employee');

class Manager extends Employee {
    
    constructor (name , id, email, officeNumber  )
    {
        //office number parameter
        super (name, id,  email) ;
        this.officeNumber = officeNumber ;
    }

        //function specified in criteria
     getOfficeNumber () {
        return this.officeNumber ;
    }
    getRole () {
        return "Manager" ;
    
}}
module.exports = Manager;